import { ContactsProvider } from "./context/ContactsContext";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";

const App = () => (
  <ContactsProvider>
    <div style={{ padding: 20, maxWidth: 400, margin: "0 auto" }}>
      <h1>Phonebook (Context + Refs)</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  </ContactsProvider>
);

export default App;