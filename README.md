# 🔍 SmartSummaryExtension – AI-Powered Chrome Extension for Article Summarization

SmartSummaryExtension is a powerful AI-based Chrome Extension that summarizes any webpage or article into just **3 simple lines** — within seconds!

This tool is designed for students, professionals, and readers who want to **save time** and **grasp key points instantly** using advanced Natural Language Processing.

---

## 🚀 Features

- ✅ **AI-Powered Summarization** using the TextRank NLP algorithm
- ✅ **One-Click Summarize** – works instantly on any webpage
- ✅ **Minimalist Chrome Extension UI**
- ✅ **Fast Flask Backend** for real-time processing
- ✅ Lightweight, efficient, and developer-friendly

---
---

## 🧠 How It Works

1. User clicks the **SmartSummaryExtension** icon on the browser.
2. The extension fetches text from the current webpage.
3. The Flask backend processes the content using TextRank and returns a **3-line summary**.
4. The summary is instantly displayed in the extension popup.

---

## 🛠️ Tech Stack

- **Frontend:** HTML, JavaScript (Chrome Extension)
- **Backend:** Python Flask
- **Machine Learning / NLP:** TextRank Algorithm (with spaCy)
- **Other Tools:** Git, VS Code, Virtualenv

---

## 📁 Project Structure

```
SmartSummaryExtension/
├── backend/
│   ├── app.py              # Flask API server
│   ├── summarizer.py       # AI logic
│   ├── test_request.py     # Sample test script
│   ├── requirements.txt
│
├── extension/
│   ├── manifest.json       # Chrome extension config
│   ├── popup.html          # User interface
│   ├── popup.js            # JS logic
│   ├── icon.png            # Extension icon
│
├── requirements.txt        # Combined dependencies
├── README.md               # Project description
```

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/deep-codr/SmartSummaryExtension.git
cd SmartSummaryExtension
```

---

### 2. Set Up the Backend (Flask Server)

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate      # On Windows
pip install -r requirements.txt
python app.py
```

The backend will start on `http://localhost:5000`

---

### 3. Load the Chrome Extension

1. Open your browser and go to `chrome://extensions/`
2. Enable **Developer Mode** (top-right corner)
3. Click **Load Unpacked**
4. Select the `extension/` folder from this project

Now just visit any webpage and click the extension icon to summarize the page!

---

## 💬 Future Improvements

- [ ] Add Transformer-based models like BERT / T5 for better summaries
- [ ] Multilingual summarization support (Hindi, Spanish, etc.)
- [ ] Add options for 5-line / 10-line summaries
- [ ] Dark mode for popup UI

---

## 📫 Contact & Socials

| Platform     | Handle / Link                              |
|--------------|--------------------------------------------|
| **GitHub**   | [@deep-codr](https://github.com/deep-codr) |
| **Instagram**| `@deepcodr`                                |
| **Twitter**  | [@varznn_](https://twitter.com/varznn_)    |
| **Telegram** | [@varzunn](https://t.me/varzunn)           |
| **Email**    | `respawncoder@gmail.com`                   |

---

## 🧑‍💻 Author

Made with ❤️ by **Varun**  
Student • Python & ML Developer • Freelancer

---

## 🌟 Support & Feedback

If you like this project, don’t forget to ⭐️ the repo and share feedback!  
Want something similar built? Ping me on [Fiverr](https://fiverr.com) or via my social handles above.

---
