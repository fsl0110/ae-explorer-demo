## How to use CRA-Setup with Yarn Workspace

### Steps to reproduce

- Clone two cra-setups into the packages folder. One with the name rui.micro-app und one with the name rui.component-lib. The prefix rui is to keep the packages ordered alphabetically on gitlab. RUI means React User Interface. RDK means React Developer Kit e.g for the create reract app setup. In this way every React stuff is close together. But i am not sure if it is possible to order repositories alphabetically on gitlab or if it is more importand to order repositories by labels. It is just a proposal. But anyway it makes a lot of sense to to see within the project name that wether it is a react appication, componnt or libary.

- Change the names of the cloned cra-setups in package.json. One to rui.micro-app and one to rui.component-lib. Use Namesspaces to avoid downloads from the Yarn Registry. The Namespace for micro-apps is usefull when using it as component.

- Run `yarn install` **from workspace root** to install all dependencies for both workspaces. All dependencies will be installed in the node_modules folder of the workspace root.

- Run `yarn workspace rui.microapp add rui.component-lib@0.1.0` **from workspace root**. This installs the component library into the micro-app. Be aware of the version number to avoid downloads from the Yarn registry

- **Now you are ready to use yarn workspaces. Follow the next steps to start developing**

* it make sense to open two instances of your editor. One for the micro-app and one for the component-library

* Run `yarn build:lib:watch` **inside the component-lib folder** to enable Live Reloading. Live Reloading means that you can make changes in the component library which are directly affected in the app.

* Run `yarn start` **inside the micro-app folder** to start the development mode of the app

* Import a component from the componente-lib into the app. E.g. `import {Heading} from "rui.component-lib"`

* **Make changes in the imported component within the component-lib and see the changes in the app within a second! Thats pretty cool isn't it :-)**
