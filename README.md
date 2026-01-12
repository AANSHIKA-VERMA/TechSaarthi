# 🌸 TechSaarthi — Empowering Women in Tech

TechSaarthi is a React-based web platform designed to help **BTech students, especially women**, discover and navigate **tech opportunities** such as internships, scholarships, hackathons, career programs, and leadership initiatives.
The platform combines **structured opportunity discovery** with an **AI-powered guidance assistant** to provide personalized and accessible career support.

---

## 🎯 Objective

The goal of TechSaarthi is to reduce information gaps and improve access to career opportunities for women in tech by:

* Centralizing verified opportunities in one place
* Providing personalized discovery and recommendations
* Offering AI-based guidance and motivational support

---

## 🚀 Features

### 🔍 Opportunity Discovery

* Lists internships, scholarships, hackathons, and programs using structured JSON data
* Each opportunity includes a **“View Details”** button linking to detailed Notion pages

### 🧠 Smart Filtering

* Filter opportunities by:

  * Opportunity type
  * Academic year
  * Eligibility (female-only / open to all)
  * Tech domain
* Dynamic filtering implemented using client-side state management

### ⭐ Personalized Dashboard

* Users select their academic year and interests
* Platform recommends relevant opportunities based on inputs

### ❤️ Save & Bookmark

* Users can bookmark opportunities for later reference
* Bookmarked data is persisted using **localStorage** (no authentication required)

### 🗓️ Weekly Opportunity Digest

* Highlights a curated set of high-impact opportunities for the current week

---

## 🤖 AI-Powered Guidance (Core Highlight)

### TechSaarthi AI Assistant

An AI-based chatbot integrated using **OpenAI / Gemini API** that:

* Answers career-related questions
* Recommends suitable opportunities
* Explains programs and eligibility in simple language
* Provides motivational prompts to encourage women in tech

### Confidence Booster

* One-click **“Motivate Me”** feature
* Generates encouraging messages, role-model references, and actionable next steps

---

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Styling:** Tailwind CSS (optional)
* **AI Integration:** OpenAI API / Gemini API
* **Data Storage:** JSON files + localStorage
* **Opportunity Details:** Notion pages (external links)

---

## 🧩 How It Works (High Level)

1. Opportunities are loaded from a structured JSON dataset
2. Users filter and personalize results using client-side logic
3. Saved opportunities are stored locally using browser storage
4. AI assistant processes user queries using predefined system prompts
5. Notion links provide detailed, maintainable opportunity documentation

---

## 🌱 Future Enhancements

* Authentication and user profiles
* Email-based weekly opportunity notifications
* Resume analysis and skill gap detection
* Admin panel for opportunity management

---

## 👩‍💻 Target Audience

* BTech students (1st–4th year)
* Women exploring careers in technology
* Students seeking centralized, guided access to tech opportunities

---

## 📌 Motivation Behind the Project

Many students miss valuable opportunities due to scattered information and lack of guidance.
TechSaarthi aims to act as a **digital mentor**, helping women in tech make informed career decisions with confidence.

