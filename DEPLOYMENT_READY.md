# La Flightish Global – Deployment Guide

> **Domain:** flightishglobal.com  
> **Hosting:** Oracle Cloud Always Free VM + Cloudflare CDN  
> **CI/CD:** GitHub Actions (auto-deploy on push to `main`)  
> **Repo:** github.com/karthikeyanveeran/FligtishWeb

---

## Architecture

```
GitHub (push to main)
    ↓
GitHub Actions (npm ci → npm run build)
    ↓
SCP dist/ → Oracle Cloud ARM VM
    ↓
Nginx serves static files
    ↓
Cloudflare CDN/DNS (proxied)
    ↓
Users access flightishglobal.com
```

**Cost: $0/month** — All free-tier services.

---

## ⚠️ Isolation Notice

This project (La Flightish Global corporate website) is **completely separate** from:

| | This Project | YAY! Platform |
|---|---|---|
| Purpose | Company website | Adventure booking platform |
| Domain | flightishglobal.com | yay.place |
| Repo | GitHub: FligtishWeb | GitLab: yay-place |
| Hosting | Oracle VM + Cloudflare | Cloudflare Workers + Pages |
| CI/CD | GitHub Actions | GitLab CI |

**Do NOT mix infrastructure, secrets, or deployments between these two projects.**

---

## GitHub Secrets Required

Add these in **GitHub → Settings → Secrets → Actions**:

| Secret | Description |
|--------|-------------|
| `ORACLE_VM_HOST` | Oracle VM public IP address |
| `ORACLE_VM_USER` | SSH user (`ubuntu` or `opc`) |
| `ORACLE_VM_SSH_KEY` | Private SSH key for the VM (preferred; workflow also supports legacy `ORACLE_VM_KEY`) |
| `CF_ZONE_ID` | Cloudflare Zone ID for flightishglobal.com |
| `CF_API_TOKEN` | Cloudflare API token (Zone:Cache Purge permission) |

---

## Oracle VM Setup (One-Time)

```bash
# 1. Install Nginx
sudo apt update && sudo apt install nginx -y

# 2. Create web root
sudo mkdir -p /var/www/flightishglobal.com
sudo chown -R $USER:$USER /var/www/flightishglobal.com

# 3. Nginx site config
sudo tee /etc/nginx/sites-available/flightishglobal.com <<'EOF'
server {
    listen 80;
    listen [::]:80;
    server_name flightishglobal.com www.flightishglobal.com;
    root /var/www/flightishglobal.com;
    index index.html;

    # SPA fallback
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff2?)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
}
EOF

# 4. Enable site
sudo ln -sf /etc/nginx/sites-available/flightishglobal.com /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl restart nginx

# 5. Firewall — allow only Cloudflare IPs (recommended)
# See: https://www.cloudflare.com/ips/
```

---

## Cloudflare Setup (One-Time)

1. Add `flightishglobal.com` to Cloudflare (Free plan)
2. Update nameservers at your registrar to Cloudflare's
3. DNS Records:
   - `A` → `flightishglobal.com` → Oracle VM IP (Proxied ☁️)
   - `CNAME` → `www` → `flightishglobal.com` (Proxied ☁️)
4. SSL/TLS → Full (Strict)
5. Install Cloudflare Origin Certificate on Nginx for HTTPS
6. Enable: Auto Minify, Brotli, Always Use HTTPS, HSTS

---

## Deploying

Automatic on every push to `main`. Manual deploy:

```bash
npm ci && npm run build
scp -r dist/* user@VM_IP:/var/www/flightishglobal.com/
```

---

## Build Info

- **Framework:** React 18 + Vite + Tailwind CSS
- **Output:** `dist/` (static HTML/JS/CSS)
- **Bundle:** ~627 kB (176 kB gzipped)
- **Build time:** ~8 seconds
