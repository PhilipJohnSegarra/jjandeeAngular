    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    import { getAnalytics } from "firebase/analytics";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
    
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyDIc7uI7wwJMu0yShGyQqxdY7JxLPgKcUk",
      authDomain: "jjandee.firebaseapp.com",
      projectId: "jjandee",
      storageBucket: "jjandee.appspot.com",
      messagingSenderId: "1028651139110",
      appId: "1:1028651139110:web:a35f5343f2125b280e66e7",
      measurementId: "G-282B780J38"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);