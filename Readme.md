**Deploy to cPanel**
=====================

### Step 1: Prepare Project

* Run `npm run build` to build your project
* Create a new directory for your project, e.g., `bot-project`
* Copy the contents of your project directory (including the `bot` directory) to the newly created directory

### Step 2: Upload to cPanel

* Log in to your cPanel account and navigate to the File Manager
* Create a new directory for your project, e.g., `bot-project`
* Upload the contents of your project directory to the newly created directory on cPanel

### Step 3: Configure cPanel

* Navigate to the cPanel dashboard and click on the "Software" section
* Click on "Select PHP Version" and ensure that the PHP version is compatible with your project's requirements
* Click on "File Manager" and navigate to the `bot-project` directory
* Right-click on the `index.js` file and select "Change Permissions". Set the permissions to `755` or `644` depending on your project's requirements

### Step 4: Set up Node.js on cPanel

* Navigate to the cPanel dashboard and click on the "Advanced" section
* Click on "Node.js" and select the Node.js version compatible with your project's requirements
* Click on "Create Application" and fill in the required information:
	+ Application root: `/home/username/bot-project/bot`
	+ Application URL: `https://example.com/bot`
	+ Startup file: `index.js`
* Click "Create" to create the Node.js application

### Step 5: Test Application

* Navigate to the application URL specified in Step 4 to test your application

**Troubleshooting**
-----------------

* If you encounter any issues during deployment, check the cPanel error logs for more information
* Ensure that the Node.js version and PHP version are compatible with your project's requirements
