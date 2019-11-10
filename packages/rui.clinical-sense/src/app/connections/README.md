# Connection Wrapper

The permantent place for redux or websocket connection wrapper. I think it make sense to keep all connections in one folder. In this ways we can easily change the connection from redux to websocket and we have a direct overview about the connections of an app.

Another possibility is to keep the connection wrapper inside the component. But than we need to have redux in our component library.

## Usage of Connection Wrapper

Connected components are components that are connected to Redux or a real-time database like Firebase or another server-side implementation. To ensure reusability, the components must be separated from the data fetching. For this we usually use wrapper components.

In this example application, the components are connected to a Redux Store, but they can easily be switched to another implementation by the way their wrappers are exported. To do this you simply have to change the wrappers paths in the barrel root file (index.ts) inof the connections folder and not in the entire application. An example can be found in the comments in the barrel file of the connections folder.
