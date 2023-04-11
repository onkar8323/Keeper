import React from "react";
import Header from "./header";
import Note from "./note";
import Footer from "./footer";
import notes from "../notes";

function CreateNote(item) {
  return <Note key={item.id} title={item.title} content={item.content} />;
}
function App() {
  return (
    <div>
      <Header />
      {notes.map(CreateNote)}
      <Footer />
    </div>
  );
}

export default App;
