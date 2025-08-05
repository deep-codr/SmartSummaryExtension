document.getElementById("summarizeBtn").addEventListener("click", async () => {
  const text = document.getElementById("inputText").value;
  const output = document.getElementById("output");

  output.innerText = "Loading summary...";

  try {
    const res = await fetch("http://127.0.0.1:5000/summarize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: text })
    });

    if (!res.ok) throw new Error("Server error");

    const data = await res.json();
    output.innerText = data.summary;
  } catch (err) {
    output.innerText = "Something went wrong: " + err.message;
  }
});
