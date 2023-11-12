import "./App.css";
import { UsersProvider } from "./UsersContext";
import Users from "./components/Users";

function App() {
    return (
        <UsersProvider>
            <Users />
        </UsersProvider>
    );
}

export default App;
