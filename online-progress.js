import { auth, db } from "./firebase-config.js";

import {
    doc,
    getDoc,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

auth.onAuthStateChanged((user) => {

    if (!user) {
        document.getElementById("loginMessage").innerHTML =
            "🔐 Please login to view your progress.";
        return;
    }

    const studentRef = doc(db, "students", user.uid);

    // Real-time data
    onSnapshot(studentRef, (snapshot) => {

        if (!snapshot.exists()) {
            return;
        }

        const data = snapshot.data();

        const score = data.percentage || 0;

        document.getElementById("onlineScore").innerHTML =
            score + "%";

        document.getElementById("progressBar").style.width =
            score + "%";

        document.getElementById("progressText").innerHTML =
            score + "% Completed";

        document.getElementById("studentEmail").innerHTML =
            data.email || user.email;

    });

});
