### **README.md**

# 🚀 User Management Application

A simple, responsive web application to manage user details. The application allows users to view, add, edit, and delete user records seamlessly.

---

## **🚀 Features**

- **Add Users**: Create a new user with essential details (First Name, Last Name, Email, and Department).
- **Edit Users**: Update existing user information with a pre-filled form for ease of editing.
- **Delete Users**: Remove users from the list instantly, with changes reflected on the UI.
- **Real-Time Feedback**: Immediate UI updates for all actions, along with success and error notifications.
- **Pagination**: Navigate through a large user list, displaying six users per page, with `Previous` and `Next` controls.

---

## **🛠️ Tech Stack**

### **Frontend**
- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast and efficient build tool for modern web development.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

### **Backend**
- **JSONPlaceholder**: A mock REST API for demonstration purposes.

---
## Desktop View
![user-management-teal-alpha vercel app_](https://github.com/user-attachments/assets/8abd0292-dba1-49de-ab6b-5d8fa7a5cc3a)

##Mobile View
![user-management-teal-alpha vercel app_ (1)](https://github.com/user-attachments/assets/2e5dedfe-991c-4e57-8b19-88cc7114b499)

## **📂 Folder Structure**

Here is an overview of the project's folder structure:

```
USER-MANAGEMENT-APP/
├── node_modules/               # Node.js modules
├── public/
│   └── index.html              # HTML template
├── src/
│   ├── assets/                 # Additional project assets (e.g., images)
│   ├── components/             # Reusable React components
│   │   ├── Header.jsx          # Header component for the app
│   │   ├── Pagination.jsx      # Pagination component for user list
│   │   ├── UserCard.jsx        # Individual user card display component
│   │   └── UserFormModal.jsx   # Modal form for adding/editing users
│   ├── pages/
│   │   └── UserManagement.jsx  # Main page for managing users
│   ├── services/
│   │   └── api.js              # API service for HTTP requests
│   ├── App.jsx                 # Root component for the application
│   ├── index.jsx               # Entry point for React
│   └── styles/
│       └── index.css           # Global styles
├── .gitignore                  # Files and directories to ignore in Git
├── tailwind.config.js          # Tailwind CSS configuration file
├── vite.config.js              # Vite configuration file
├── package.json                # Project dependencies and scripts
└── README.md                   # Project documentation
```

---

## **🚀 How to Run the Project**

### **Step 1: Clone the Repository**

git clone [<repository-url>](https://github.com/parveenbarak/User_management.git)
cd USER-MANAGEMENT-APP


### **Step 2: Install Dependencies**

npm install


### **Step 3: Start the Development Server**

npm run dev


### **Step 4: Open the Application**
Visit [http://localhost:5173](http://localhost:5173) to view the app in your browser.

---

## **🌟 Features in Action**

1. **Add User**:
   - Click on the "Add New User" button.
   - Fill in the form details and click "Save."
   - The new user is immediately added to the screen.

2. **Edit User**:
   - Click the "Edit" button for a user.
   - The form is pre-filled with the user’s details for editing.
   - Modify the details and click "Save." Changes are reflected instantly.

3. **Delete User**:
   - Click the "Delete" button for a user.
   - The user is removed from the UI without refreshing the page.

4. **Pagination**:
   - Navigate between pages using the `Previous` and `Next` buttons.
   - The current page and total pages are displayed for easy navigation.

---

