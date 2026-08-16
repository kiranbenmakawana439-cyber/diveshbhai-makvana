import { auth, db } from "./firebase-config.js";

import {
    doc,
    setDoc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

export async function saveQuizScore(score, total) {

    const user = auth.currentUser;

    if (!user) {
        alert("Please login first.");
        return;
    }

    const percentage = Math.round(
        (score / total) * 100
    );

    await setDoc(
        doc(db, "students", user.uid),
        {
            email: user.email,
            lastScore: score,
            totalQuestions: total,
            percentage: percentage,
            updatedAt: new Date()
        },
        { merge: true }
    );

    alert(
        "✅ Quiz score saved!\nScore: " +
        percentage +
        "%"
    );
}
