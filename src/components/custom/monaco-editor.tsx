import { ComponentType, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import { Monaco } from '@monaco-editor/react';

const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

// Define the type for the onChange callback
type OnChange = (value: string | undefined, event: Event) => void;

// Define the EditorProps interface
interface EditorProps {
  height?: string;
  width?: string;
  language?: string;
  value?: string;
  onChange?: OnChange;
}

const BasicEditor: React.FC<EditorProps> = ({
  height = '100%',
  width = '100%',
  language = 'python',
  value = '',
  onChange,
}) => {
  const { resolvedTheme } = useTheme();
  const monacoRef = useRef<Monaco | null>(null); // Create a ref to store the monaco instance

  const handleEditorDidMount = (_editor: ComponentType<EditorProps>, monaco: Monaco) => {
    monacoRef.current = monaco; // Store the monaco instance in the ref
    defineTheme(monaco,  resolvedTheme || 'light'); // Call defineTheme here
  };

  const defineTheme = (monaco: Monaco, theme: string) => {
    const lightTheme = {
      base: 'vs',
      inherit: true,
      rules: [
        { token: 'comment', foreground: '5b5b5b', fontStyle: 'italic' }, // Dark gray
        { token: 'keyword', foreground: '007acc', fontStyle: 'bold' },   // Blue
        { token: 'string', foreground: '3a5e3c' },                       // Green
        { token: 'number', foreground: 'b58900' },                       // Yellow
        { token: 'variable', foreground: '000000' },                     // Black
        { token: 'function', foreground: '6c6c6c' },                     // Gray
                     // Blue        
                 // Orange

      ],
      colors: {
        "editor.foreground": "#000000",                     // Default text color
        "editor.background": "#FFFFFF",                     // Background color
        "editorCursor.foreground": "#000000",               // Cursor color
        "editor.lineHighlightBackground": "#0000FF20",     // Line highlight background (semi-transparent blue)
        "editorLineNumber.foreground": "#008800",           // Line number color
        "editor.selectionBackground": "#B3D4FC",            // Selection background color            // Line highlight border color
    }
    ,
    };

    const darkTheme = {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'comment', foreground: '8b8b8b', fontStyle: 'italic' }, // Gray
        { token: 'keyword', foreground: 'ff79c6', fontStyle: 'bold' },   // Pink
        { token: 'string', foreground: 'a6e22e' },                       // Green
        { token: 'number', foreground: 'd19a66' },                       // Orange
        { token: 'variable', foreground: 'ffffff' },                     // White
        { token: 'function', foreground: '66d9ef' },                     // Light blue
        
      ],
      colors: {
        "editor.foreground": "#FFFFFF",                     // Default text color
        "editor.background": "#020817",                     // Background color
        "editorCursor.foreground": "#FFFFFF",               // Cursor color
        "editor.lineHighlightBackground": "#0d1a2e",     // Line highlight background (semi-transparent blue)
        "editorLineNumber.foreground": "#B0B0B0",           // Line number color
        "editor.selectionBackground": "#4A90E2",            // Selection background color
        "editor.selectionForeground": "#FFFFFF",            // Selection text color
        "editor.wordHighlightBackground": "#FFD70020",      // Word highlight background (semi-transparent yellow)
        "editor.wordHighlightStrongBackground": "#FF634720",// Strong word highlight background (semi-transparent tomato)
        "editorIndentGuide.background": "#444444",          // Indent guide color
        "editorIndentGuide.activeBackground": "#666666",    // Active indent guide color
        "editor.findMatchBackground": "#FF000020",          // Find match background (semi-transparent red)
        "editor.findMatchHighlightBackground": "#FF450020", // Highlight match background (semi-transparent orange)
        "editorWhitespace.foreground": "#4D4D4D",           // Whitespace characters color
        "editor.codeLens.foreground": "#AAAAAA",            // Code lens color (for inline hints)
                 // Line highlight border color
    }
    
    };

    const themeToDefine = theme === 'dark' ? darkTheme : lightTheme;

    // Define and set the custom theme
    monaco.editor.defineTheme('myCustomTheme', themeToDefine);
    monaco.editor.setTheme('myCustomTheme');
  };

  // useEffect to update the theme when resolvedTheme changes
  useEffect(() => {
    if (monacoRef.current) { // Ensure the monaco instance is available
      defineTheme(monacoRef.current, resolvedTheme || 'light'); // Use the stored monaco instance
    }
  }, [resolvedTheme]); // Dependency array to trigger effect when resolvedTheme or theme changes

  return (
    <MonacoEditor
      height={height}
      width={width}
      language={language}
      value={value}
      
      options={{
        minimap: {
          enabled: false, // Turn off the minimap
        },
        scrollbar: {
          vertical: 'hidden',   // Hide vertical scrollbar
          horizontal: 'hidden', // Hide horizontal scrollbar
        },
        
        fontSize: 16,
        selectOnLineNumbers: true,
      }}
      onMount={handleEditorDidMount}
      onChange={onChange}
      
    />
  );
};

export default BasicEditor;