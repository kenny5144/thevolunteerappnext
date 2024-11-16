# thevolunteerappnext
# Community Service Platform

The Community Service Platform is a web application developed as part of a 3-person team during a 3-day hackathon. The platform is designed to empower students by simplifying the process of discovering and tracking community service opportunities. It enables users to find opportunities, track their hours, and manage progress toward graduation requirements.

## Key Features

- **User Registration & Authentication:**  
  Users can sign up, log in, and securely manage their profiles. Authentication is handled using JWT tokens for secure login.

- **Service Opportunity Discovery:**  
  Students can browse available community service opportunities in their area. Opportunities can be filtered based on categories, such as "Local" or "Virtual," and sorted by date, location, or impact.

- **Track Hours & Progress:**  
  Students can log their community service hours, track the total time contributed, and monitor their progress toward meeting graduation requirements. A user-friendly dashboard displays this information in an easy-to-read format.

- **Responsive Design:**  
  The platform is fully responsive, with a design optimized for desktop, tablet, and mobile users. The UI was built using Next.js and ShadCN components to ensure a clean, modern look and feel.

- **Real-time Data Storage:**  
  All user data, including service hours and opportunities, is stored in MongoDB. The backend is built with Express.js, ensuring fast and efficient data management.

## Tech Stack

- **Frontend:**  
  - **Next.js:** A React-based framework for building fast, SEO-friendly applications. We used Next.js to handle routing, dynamic content loading, and server-side rendering.
  - **ShadCN:** A UI component library that helped us quickly develop clean, reusable components for the platform.
  
- **Backend:**  
  - **Express.js:** A minimal and flexible Node.js web application framework used to handle the API and server-side logic.
  - **MongoDB:** A NoSQL database for storing user data, including service hours and available opportunities. It provides scalability and flexibility.

## Installation

Follow the steps below to set up and run the application locally.

1. **Clone the repository:**
    ```bash
    git clone https://github.com/username/repository-name.git
    ```

2. **Install dependencies:**
    ```bash
    cd repository-name
    npm install
    ```

3. **Set up environment variables:**
    - Create a `.env` file and add your MongoDB connection string and any other environment-specific variables.
    - Example:
      ```env
      MONGO_URI=mongodb://localhost:27017/community-service
      JWT_SECRET=your-secret-key
      ```

4. **Run the application:**
    ```bash
    npm run dev
    ```

   The app will be running at `http://localhost:3000`.

## Usage

Once the application is running, users can:

- Sign up or log in to create a personal account.
- Browse and search for community service opportunities.
- Log service hours and view their progress on a dashboard.

## Contributing

Feel free to fork the repository, submit issues, or create pull requests if you'd like to contribute.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
