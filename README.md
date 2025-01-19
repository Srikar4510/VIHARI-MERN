# Vihari - Travel and Tour Platform

Welcome to Vhari, an travel and tour platform built using the MERN stack. Vihari offers a comprehensive set of features for agents, users(traveler), and administrators.

## How to Run

To get started with Vihari, follow these steps:

1. Clone the GitHub repository:
```bash
https://github.com/Srikar4510/VIHARI-MERN.git
```

2. Open your terminal and navigate to the cloned directory.

3. Install Node.js modules for both the client(frontend) and server(backend) and run below commands in 2 different terminals:
```bash
npm install
```

```bash
cd backend
npm install
```

4. Start the development server in cloned directory:

```bash
npm start
```

5. Access the website at [http://localhost:3000](http://localhost:3000).

## Users

Vihari consists to three main types of users:

- User(Traveler)
- Agent
- Admin

## Features

### General Features

- All users can view the website and book available buses between two places.
- All users can also book tours. 
- Booking buses and tours can be accessed only upon signup and signin.
- Good authentication system using JWT tokens.
- Implemtation of mutations for getting data from server using modern redux-toolkit.

### User Features

- User have their own profile.
- Booking buses and tours is open to users.
- User can book bus tickets and tours.
- User can see booking history of buses and tours.

### Agent Features

- Agent can add buses and tours upon approval by the admin.
- Dashboard for managing buses and tours.
- Addition, updation, and deletion of Buses.
- Addition, updation, and deletion of Tours.
- Addition and deletion of Tourplaces.
- Agent can edit their profile.

### Admin Features

- Dashboard manage agents and users.
- Approval or rejection of Agent requests.
- Admin can block/unblock an agent.
- Admin can send emails to all users regarding any important announcements.
Mallikarjuna sir
