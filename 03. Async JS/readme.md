GET https://firestore.googleapis.com/v1/projects/test-project-b78c0-default-rtdb/databases/(default)/documents/products/productID123

Headers:
Authorization: Bearer <YOUR_AUTH_TOKEN>

POST https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=<YOUR_API_KEY>

Headers:
Content-Type: application/json

Body:
{
  "email": "testuser@example.com",
  "password": "password123",
  "returnSecureToken": true // Get the ID token
}


POST https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=<YOUR_API_KEY>

Headers:
Content-Type: application/json

Body:
{
  "email": "user@example.com",
  "password": "password123",
  "returnSecureToken": true // This is crucial to get the ID token
}

>>>
POST https://firestore.googleapis.com/v1/projects/<YOUR_PROJECT_ID>/databases/(default)/documents/<COLLECTION_PATH>

Headers:
Authorization: Bearer <YOUR_AUTH_TOKEN>
Content-Type: application/json

Body:
{
  "fields": {
    "fieldName1": { "stringValue": "value1" },
    "fieldName2": { "integerValue": 123 },
    "fieldName3": { "booleanValue": true },
    // ... more fields ...
  }
}
