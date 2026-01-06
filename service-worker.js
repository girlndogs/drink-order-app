importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyAIugKjWMFbB8eDLSY5JInBM1lsyQ3bIHo",
  authDomain: "drink-order-test.firebaseapp.com",
  projectId: "drink-order-test",
  messagingSenderId: "90936648282",
  appId: "1:90936648282:web:b9854c3438319db80cae63"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "icon-192.png",
    vibrate: [200, 100, 200],
    requireInteraction: true
  });
});
