# Social Media Content Planner - Frontend

This is the frontend client for the Social Media Content Planner, a full-stack web application designed to help users schedule and track social media posts. It is built with **React (Vite)** and uses **Chart.js** for data visualization.

## 🔗 Live Deployment

- **URL:** http://sbm-frontend-s3-bucket.s3-website.eu-north-1.amazonaws.com

## ⚙️ Tech Stack

- **Framework:** React 18 (Vite)
- **Language:** JavaScript (ES6+)
- **HTTP Client:** Axios
- **Charts:** Chart.js (react-chartjs-2)
- **Styling:** CSS / Tailwind
- **Hosting:** AWS S3 (Static Website Hosting)

## � Third-Party Integration

- **Service:** [DummyJSON](https://dummyjson.com/)
- **Feature:** "Generate Quote" (AI Content)
- **Usage:**
  - Endpoint: `https://dummyjson.com/quotes/random`
  - Function: When users click the "💡" icon in the Create Post form, the frontend fetches a random quote and author from this API to auto-populate the content field.

## �🛠 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

## 📥 Installation & Local Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Techaso/sbm-frontend.git
    cd sbm-frontend
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Environment Configuration:**

    Create a `.env.local` file in the root directory for local development:

    ```env
    VITE_BACKEND_URL=http://127.0.0.1:8000
    ```

    - This configures the frontend to connect to your local backend server running on port 8000.
    - **Note:** Ensure your backend server is running locally on port 8000 before starting the frontend.
    - For deployment, a `.env.production` file should be created with the production backend URL (see Deployment section below).

4.  **Start the Development Server:**
    ```bash
    npm run dev
    ```
    The app will run at `http://localhost:5173`.

---

## 🚀 Deployment Architecture (AWS)

This project is deployed using a **Split-Stack Architecture** on AWS.

- **Frontend (AWS S3):**
  - The React application is built using `npm run build` to generate static files (`dist/`).
  - These files are hosted in a public AWS S3 bucket with "Static Website Hosting" enabled.
  - The S3 bucket permissions are configured to allow public read access via a Bucket Policy.

- **Environment Setup for Deployment:**
  - Create a `.env.production` file in the root directory with the production backend URL:
    ```env
    VITE_BACKEND_URL=http://xx.xx.xx.xx
    ```
  - Replace `http://xx.xx.xx.xx` with your actual backend server URL/IP address.
  - When running `npm run build`, Vite will automatically use the environment variables from `.env.production`.

- **Integration:**
  - The Frontend (S3) communicates with the Backend (EC2) via REST APIs.
  - CORS (Cross-Origin Resource Sharing) is configured on the Django backend to strictly allow requests from this S3 URL.

## 🧪 How to Test the Application

### 1. Test CRUD Operations (UI Flow)

1.  **Create:** Click the "Create Post" button. Enter a title (e.g., "New Campaign"), content, and select a platform (e.g., "LinkedIn"). Click Submit.
2.  **Read:** The new post will immediately appear in the dashboard list. Refresh the page to verify data persistence (loaded from the AWS RDS database).
3.  **Update:** Click the "Edit" (Pencil) icon on a post. Change the status from "Draft" to "Published". Click Save. Verify the status change in the list.
4.  **Delete:** Click the "Delete" (Trash) icon. Confirm that the post is removed from the list.

### 2. Test Data Visualization

- Navigate to the main **Dashboard**.
- Observe the **Stats** at the top of the page, and **Pie Charts** at the left side of the page.
- **Action:** Add a new post with "Platform: Instagram".
- **Result:** The stats and charts will instantly update to reflect the new count for Instagram.

### 3. Test Third-Party API Integration

- Navigate to the **Create New Post** section. Click on bulb icon near Content Input Text Field.
- This feature fetches a random quote via the dummyJSON REST API and shows in content text input field.
