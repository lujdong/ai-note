import { Editor } from "novel";

const NoteEditor = () => {
  return (
    <div className="editor-container">
      <div className="editor-wrap text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800 asd">
        <Editor />
      </div>
    </div>
  );
};

export default NoteEditor;
