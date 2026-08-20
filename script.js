// AI Productivity Assistant
// Demonstration of AI-assisted productivity features

function generateEmail() {
    const input = document.getElementById("emailInput").value;
    const result = document.getElementById("emailResult");

    if (input.trim() === "") {
        result.innerHTML = "Please enter the purpose of the email.";
        return;
    }

    result.innerHTML = `
        <strong>Subject:</strong> Professional Workplace Communication<br><br>
        Dear Colleague,<br><br>
        I am writing regarding ${input}. 
        Please let me know if you require any additional information.<br><br>
        Kind regards,<br>
        Lucy
    `;
}

function summarizeMeeting() {
    const input = document.getElementById("meetingInput").value;
    const result = document.getElementById("meetingResult");

    if (input.trim() === "") {
        result.innerHTML = "Please enter your meeting notes.";
        return;
    }

    result.innerHTML = `
        <strong>Meeting Summary</strong><br><br>
        ${input}<br><br>
        <strong>Action Items:</strong><br>
        • Review the discussed tasks.<br>
        • Confirm responsibilities.<br>
        • Follow up on outstanding items.
    `;
}

function planTask() {
    const input = document.getElementById("taskInput").value;
    const result = document.getElementById("taskResult");

    if (input.trim() === "") {
        result.innerHTML = "Please enter a task.";
        return;
    }

    result.innerHTML = `
        <strong>Task Plan</strong><br><br>
        <strong>Task:</strong> ${input}<br><br>
        1. Define the objective.<br>
        2. Break the task into smaller activities.<br>
        3. Set priorities and deadlines.<br>
        4. Complete and review the work.
    `;
}

function assistResearch() {
    const input = document.getElementById("researchInput").value;
    const result = document.getElementById("researchResult");

    if (input.trim() === "") {
        result.innerHTML = "Please enter a research topic.";
        return;
    }

    result.innerHTML = `
        <strong>Research Assistance</strong><br><br>
        <strong>Topic:</strong> ${input}<br><br>
        <strong>Suggested Research Questions:</strong><br>
        • What is ${input}?<br>
        • Why is it important?<br>
        • What are its main benefits and challenges?<br>
        • What current examples can be found?<br><br>
        <strong>Suggested Keywords:</strong><br>
        ${input}, benefits, challenges, examples, current developments
    `;
}

function chatbot() {
    const input = document.getElementById("chatInput").value;
    const result = document.getElementById("chatResult");

    if (input.trim() === "") {
        result.innerHTML = "Please enter a question.";
        return;
    }

    result.innerHTML = `
        <strong>AI Assistant:</strong><br><br>
        Thank you for your question. I can help you organise tasks,
        prepare professional communication, summarise information,
        plan activities and support administrative productivity.
        <br><br>
        <em>Your question:</em> ${input}
    `;
}
