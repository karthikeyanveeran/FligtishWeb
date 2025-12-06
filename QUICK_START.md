# FLIGHTISH GLOBAL - Quick Start Guide

## 🚀 Getting Started in 5 Minutes

### Step 1: Access the Platform
Visit the website and explore:
- **Homepage**: `/` - Overview of all services
- **API Documentation**: `/documentation` - Interactive API explorer

### Step 2: Get Your API Key
1. Click "Get API Key" button
2. Create a developer account
3. Generate API credentials
4. Save your API key securely

### Step 3: Choose Your Integration Method

#### Option A: Use Official SDK
```bash
# Python
pip install flightish-sdk

# JavaScript/Node.js
npm install @flightish/sdk

# PHP
composer require flightish/sdk

# Java
# Add to pom.xml
```

#### Option B: Direct API Calls
```bash
curl -H "apikey: your_api_key" \
  https://api.flightishglobal.com/hms/v1/hotel-searchquery-list
```

### Step 4: Test in Sandbox
Use sandbox environment for testing:
```
https://sandbox.flightishglobal.com
```

### Step 5: Go Live
Switch to production:
```
https://api.flightishglobal.com
```

---

## 📚 Documentation Quick Links

| Resource | URL | Purpose |
|----------|-----|---------|
| API Documentation | `/documentation` | Interactive API explorer |
| SDK Guide | `/sdk-guide` | Installation & examples |
| Integration Guide | `/integration-guide` | Step-by-step setup |
| API Changelog | `/api-changelog` | Version history |
| API Status | `/api-status` | System monitoring |
| Troubleshooting | `/integration-guide#troubleshooting` | Common issues |

---

## 💻 Code Examples

### Python
```python
from flightish import FlightishClient

client = FlightishClient(api_key='your_api_key')

# Search hotels
results = client.hotels.search(
    checkin_date='2024-04-27',
    checkout_date='2024-04-28',
    rooms=[{'adults': 2, 'children': 0}],
    nationality='106',
    currency='INR'
)

# Book a hotel
booking = client.hotels.book(
    hotel_id='16391872',
    room_id='room_123',
    guest_info={
        'first_name': 'John',
        'last_name': 'Doe',
        'email': 'john@example.com',
        'phone': '+1234567890'
    }
)
```

### JavaScript/Node.js
```javascript
const FlightishClient = require('@flightish/sdk');

const client = new FlightishClient({
  apiKey: 'your_api_key'
});

// Search hotels
const results = await client.hotels.search({
  checkinDate: '2024-04-27',
  checkoutDate: '2024-04-28',
  roomInfo: [{ numberOfAdults: 2, numberOfChild: 0 }],
  searchCriteria: {
    nationality: '106',
    currency: 'INR'
  }
});

// Book a hotel
const booking = await client.hotels.book({
  hotelId: '16391872',
  roomId: 'room_123',
  guestInfo: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '+1234567890'
  }
});
```

### cURL
```bash
# Search hotels
curl -X POST https://api.flightishglobal.com/hms/v1/hotel-searchquery-list \
  -H "apikey: your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "checkinDate": "2024-04-27",
    "checkoutDate": "2024-04-28",
    "roomInfo": [{"numberOfAdults": 2, "numberOfChild": 0}],
    "searchCriteria": {
      "nationality": "106",
      "currency": "INR"
    }
  }'

# Book a hotel
curl -X POST https://api.flightishglobal.com/hms/v1/hotel-book \
  -H "apikey: your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "hotelId": "16391872",
    "roomId": "room_123",
    "guestInfo": {
      "firstName": "John",
      "lastName": "Doe",
      "email": "john@example.com",
      "phone": "+1234567890"
    }
  }'
```

---

## 🔑 API Key Management

### Generating API Keys
1. Log in to dashboard
2. Go to API Keys section
3. Click "Generate New Key"
4. Copy and save securely
5. Configure IP whitelist

### Security Best Practices
- ✅ Store keys in environment variables
- ✅ Never commit keys to version control
- ✅ Rotate keys regularly
- ✅ Use IP whitelisting
- ✅ Monitor key usage

### Revoking Keys
1. Go to API Keys section
2. Find the key to revoke
3. Click "Revoke"
4. Confirm action

---

## 🌍 Environments

### Production
- **URL**: `https://api.flightishglobal.com`
- **Use**: Live transactions
- **Data**: Real data
- **SLA**: 99.99% uptime

### Sandbox
- **URL**: `https://sandbox.flightishglobal.com`
- **Use**: Testing and development
- **Data**: Mock data
- **SLA**: 99.90% uptime

### Staging
- **URL**: `https://staging.flightishglobal.com`
- **Use**: Pre-production testing
- **Data**: Real data (non-production)
- **SLA**: 99.95% uptime

---

## 📊 API Endpoints

### Hotel Search
```
POST /hms/v1/hotel-searchquery-list
```
Search for available hotels

### Hotel Booking
```
POST /hms/v1/hotel-book
```
Create a new booking

### Get Booking Details
```
GET /hms/v1/booking/{bookingId}
```
Retrieve booking information

### Reference Data
```
GET /reference/nationalities
GET /reference/currencies
```
Get static reference data

---

## ⚠️ Common Issues

### 401 Unauthorized
**Problem**: Invalid API key
**Solution**: Verify API key is correct and included in header

### 403 Forbidden
**Problem**: IP not whitelisted
**Solution**: Add your IP to whitelist in dashboard

### 429 Rate Limited
**Problem**: Too many requests
**Solution**: Implement exponential backoff

### 400 Bad Request
**Problem**: Invalid request format
**Solution**: Check request against API specification

---

## 🔔 Webhooks

### Supported Events
- `booking.created` - New booking created
- `booking.confirmed` - Booking confirmed
- `booking.cancelled` - Booking cancelled
- `payment.received` - Payment received
- `hotel.updated` - Hotel information updated

### Setting Up Webhooks
1. Go to Webhook Settings
2. Enter webhook URL
3. Select events to subscribe
4. Save configuration

### Webhook Payload Example
```json
{
  "event": "booking.created",
  "timestamp": "2024-03-20T10:30:00Z",
  "data": {
    "bookingId": "BK123456",
    "hotelId": "HT789",
    "status": "CONFIRMED"
  }
}
```

### Verifying Webhook Signature
```python
import hmac
import hashlib

def verify_webhook(payload, signature, secret):
    hash = hmac.new(
        secret.encode(),
        payload.encode(),
        hashlib.sha256
    ).hexdigest()
    return hash == signature
```

---

## 📞 Support

### Getting Help
- **Documentation**: `/documentation`
- **Integration Guide**: `/integration-guide`
- **Troubleshooting**: `/integration-guide#troubleshooting`
- **Status Page**: `/api-status`

### Contact Support
- **Email**: support@flightishglobal.com
- **Phone**: +1-800-FLIGHTISH
- **Hours**: 24/7 Technical Support

### Response Times
- **Critical**: 1 hour
- **High**: 4 hours
- **Medium**: 8 hours
- **Low**: 24 hours

---

## 🎯 Next Steps

1. **Read Documentation**: Visit `/documentation`
2. **Choose SDK**: Pick your language at `/sdk-guide`
3. **Follow Integration Guide**: Step-by-step at `/integration-guide`
4. **Test in Sandbox**: Use sandbox environment
5. **Go Live**: Switch to production

---

## 📋 Checklist

- [ ] API key generated
- [ ] IP whitelisted
- [ ] SDK installed
- [ ] Sandbox tested
- [ ] Error handling implemented
- [ ] Webhooks configured
- [ ] Monitoring set up
- [ ] Ready for production

---

## 🚀 You're Ready!

You now have everything needed to integrate with FLIGHTISH GLOBAL API.

**Questions?** Check `/documentation` or contact support@flightishglobal.com

---

**Last Updated**: March 20, 2024
**Version**: 2.0.0