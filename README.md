# M.I.S.S (MELTS Inventory and Sales Management System)

## Overview

M.I.S.S is a web application designed to manage inventory, suppliers, and transactions efficiently. This project is built using React, Vite, and Supabase.

You can visit the live demo page on [melts-inventory.vercel.app](https://melts-inventory.vercel.app)

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Project](#running-the-project)
- [Dependencies](#dependencies)
- [Environment Variables](#environment-variables)
- [Troubleshooting](#troubleshooting)
- [Developers](#developers)

## Installation

1. **Prerequisites**: Ensure you have Node.js and npm installed on your machine. You can download Node.js from [here](https://nodejs.org/).

2. **Clone the Repository**:
    ```sh
    git clone https://github.com/your-username/melts-inventory.git
    cd melts-inventory
    ```

3. **Install Dependencies**:
    ```sh
    npm install
    ```

## Configuration

1. **Environment Variables**: Create a `.env` file in the root directory and add the following environment variables:
    ```env
    VITE_SUPABASE_URL=your_supabase_url
    VITE_NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
    ```

    Note: Ask the developers for the env keys
## Running the Project

1. **Development Server**:
    ```sh
    npm run dev
    ```

## Dependencies

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that aims to provide a faster and leaner development experience for modern web projects.
- **Supabase**: An open-source Firebase alternative.
- **Tailwind CSS**: A utility-first CSS framework.
- **html5-qrcode**: A library for scanning QR codes using HTML5.
- For more information on the `html5-qrcode` library, visit the [official documentation](https://github.com/mebjas/html5-qrcode).
## Troubleshooting

1. **Common Issues**:
    - **Installation Errors**: Ensure you have the correct version of Node.js and npm installed.
    - **Environment Variables**: Double-check that your `.env` file is correctly configured.
    - **Port Conflicts**: Ensure the port used by Vite (default is 3000) is not occupied by another application.

2. **Debugging Tips**:
    - Use the browser's developer tools to inspect errors and logs.
    - Check the terminal for any error messages during installation or running the project.

## Developers

- **Developer 1**: Sabucido, Ryz Clyd R.
- **Developer 2**: Agunod, Juan Miguel S.
- **Developer 3**: Bapilar, Dan Blair L.

