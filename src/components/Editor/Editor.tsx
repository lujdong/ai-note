import { BlockNoteEditor } from "@blocknote/core";
import {
  BlockNoteView,
  FormattingToolbarPositioner,
  HyperlinkToolbarPositioner,
  SideMenuPositioner,
  SlashMenuPositioner,
  ImageToolbarPositioner,
  useBlockNote
} from "@blocknote/react";
import "@blocknote/react/style.css";
import './styles/index.css'

const Editor = () => {

  const editor: BlockNoteEditor = useBlockNote({});

  const onTitleEnter = (e) => {
    if (e.code === 'Enter') {
      e.preventDefault()
      editor.focus()
    }
  }

  return (
    <div className="editor-container relative flex justify-center">
      <div className="editor-wrap w-1/2">
        <BlockNoteView editor={editor} theme={"light"}>
          <h1 contentEditable className="editor-title bn-editor" onKeyDown={onTitleEnter}></h1>
          <FormattingToolbarPositioner editor={editor} />
          <HyperlinkToolbarPositioner editor={editor} />
          <SlashMenuPositioner editor={editor} />
          <SideMenuPositioner editor={editor} />
          <ImageToolbarPositioner editor={editor} />
        </BlockNoteView>
      </div>
    </div>
  )
}

export default Editor
