import { useState, useRef, useEffect } from 'react';
import ExampleTheme from './themes/ExampleTheme';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import TreeViewPlugin from './plugins/TreeViewPlugin';
import ToolBarPlugin from './plugins/ToolBarPlugin';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table';
import { ListItemNode, ListNode } from '@lexical/list';
import { CodeHighlightNode, CodeNode } from '@lexical/code';
import { AutoLinkNode, LinkNode } from '@lexical/link';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import { TRANSFORMERS } from '@lexical/markdown';
import { $generateHtmlFromNodes } from '@lexical/html';
import ListMaxIndentLevelPlugin from './plugins/ListMaxIndentLevelPlugin';
import CodeHighlightPlugin from './plugins/CodeHighlightPlugin';
import AutoLinkPlugin from './plugins/AutoLinkPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { useDispatch } from '@/hooks/useRedux';
import { setInputValues } from '@/store/formElementsSlice';

function Placeholder() {
	return <div className='editor-placeholder'>Enter some rich text...</div>;
}

export default function Editor({ id, value, list }) {
	const dispatch = useDispatch();
	const [editorContent, setEditorContent] = useState();
	// const initialEditorState = await loadContent();
	const editorStateRef = useRef();
	const editorConfig = {
		// The editor theme
		theme: ExampleTheme,

		// Handling of errors during update
		onError(error) {
			throw error;
		},
		// Any custom nodes go here
		nodes: [
			HeadingNode,
			ListNode,
			ListItemNode,
			QuoteNode,
			CodeNode,
			CodeHighlightNode,
			TableNode,
			TableCellNode,
			TableRowNode,
			AutoLinkNode,
			LinkNode,
		],
	};

	const onChange = (editorState, editor) => {
		//JSON.stringify(editor.getEditorState());
		let raw;

		editorState.read(() => {
			raw = $generateHtmlFromNodes(editor, null);
		});
		dispatch(setInputValues({ id, list, value: raw }));
	};

	useEffect(() => {
		if (editorStateRef.current !== null) {
			// if (value) {
			// 	editorStateRef.current?.innerHTML = value;
			// }
		}
	}, []);

	return (
		<LexicalComposer initialConfig={editorConfig}>
			<div className='editor-container'>
				<ToolBarPlugin />
				<div className='editor-inner' ref={editorStateRef}>
					<RichTextPlugin
						contentEditable={
							<ContentEditable className='editor-input' />
						}
						placeholder={<Placeholder />}
						ErrorBoundary={LexicalErrorBoundary}
					/>
					<OnChangePlugin
						// onChange={(editorState) =>
						// 	(editorStateRef.current = editorState)
						// }
						onChange={onChange}
					/>
					<HistoryPlugin />
					<TreeViewPlugin />
					<AutoFocusPlugin />
					<CodeHighlightPlugin />
					<ListPlugin />
					<LinkPlugin />
					<AutoLinkPlugin />
					<ListMaxIndentLevelPlugin maxDepth={7} />
					<MarkdownShortcutPlugin transformers={TRANSFORMERS} />
				</div>
			</div>
		</LexicalComposer>
	);
}
