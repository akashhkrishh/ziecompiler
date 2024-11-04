import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import { Monaco } from '@monaco-editor/react';

const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

// Define the type for the onChange callback
type OnChange = (value: string | undefined, event: any) => void;

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

  const handleEditorDidMount = (editor: any, monaco: Monaco) => {
    monacoRef.current = monaco; // Store the monaco instance in the ref
    defineTheme(monaco,  resolvedTheme || 'light'); // Call defineTheme here
  };

  const defineTheme = (monaco: Monaco, theme: string) => {
    const lightTheme = {
      base: 'vs',
      inherit: true,
      rules: [
        { token: 'comment', foreground: '008800', fontStyle: 'italic' },
        { token: 'keyword', foreground: '0000FF' },
        { token: 'number', foreground: 'FF0000' }, // Changed color for numbers
        { token: 'string', foreground: 'A31515' },
        { token: 'variable', foreground: '000000' },
        { token: 'function', foreground: 'A31515' }, // Added rule for functions
      ],
      colors: {
        'editor.foreground': '#000000',
        'editor.background': '#FFFFFF',
        'editorCursor.foreground': '#000000',
        'editor.lineHighlightBackground': '#0000FF20',
        'editorLineNumber.foreground': '#008800',
      },
    };

    const darkTheme = {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'comment', foreground: '00FF00', fontStyle: 'italic' }, // Changed color for comments
        { token: 'keyword', foreground: '569CD6' },
        { token: 'number', foreground: 'FF6347' }, // Changed color for numbers
        { token: 'string', foreground: 'CE9178' },
        { token: 'variable', foreground: 'DCDCAA' },
        { token: 'function', foreground: 'FFB800' }, // Added rule for functions
      ],
      colors: {
        'editor.foreground': '#FFFFFF',
        'editor.background': '#020817',
        'editorCursor.foreground': '#FFFFFF',
        'editor.lineHighlightBackground': '#2A2A2A',
        'editorLineNumber.foreground': '#D4D4D4',
      },
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
        
        fontSize: 14,
        selectOnLineNumbers: true,
      }}
      onMount={handleEditorDidMount}
      onChange={onChange}
      
    />
  );
};

export default BasicEditor;