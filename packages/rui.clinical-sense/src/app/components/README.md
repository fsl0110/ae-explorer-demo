# Components

The temporary place for reusable Components and the permanent place for non reusable Components. If the Components seems to be reusable in other apps they should be transfered into our component library.

## Apps components folder or component library?

The components folder of the app is primarily for components that are not used in other apps. But because you do not always know if a component is used again, you can start the development of a new component in this folder and later export it to the component library. Either way, it is most important to develop the components in such a way that they can later be easily exported to the component library. Because of this, it's a good idea to choose a way of development that forces complete isolation from an app or a store. The use of the components library is a very good way to do that.

Whether the components are developed directly in the app or in the component library, in both cases Storybook and React-Styleguidist can be used and in the end everything can be moved to the component library. But to be able to use Storybook and React-Styleguidist, the components must lie or be developed in the Lib folder. And keep in mind, a app can only be build as an component when it has no dependencies to to the lib folder because the lib folder is out of scope in this way of the build process.

If the application is to be built as a component, the components from the lib folder must be moved to the componenten library if they are to be reused, if they are not to be reused in the components folder of the app.
