export interface LayoutState {
    isFullScreen: boolean;
}

export interface EditorStyleProps {
  fontSize: number,
  minimap: boolean,
}

export interface EditorProps {
  height?: string;
  width?: string;
  language?: string;
  theme?: string;
  value?: string;
  onChange?: OnChange;
}

export interface OutputProps  { 
  stdout:string | null,
  time: string , 
  memory: number,
  stderr:string, 
  message: string,
  compile_output: string
  status: {
    id: number,
    description: string
  }  
}

export interface DataProps {
  output?: OutputProps | null
  language_name?: string ,
  language_title?: string ,
  language_id?: number,
  source_code?: string,
  stdin?: string, 
  loading?:boolean,
  error?:string | SerializedError,
  status?: null | string;
  fileName?: string,
}
export interface SubmitCodePayload {
  stdin?: string;
  source_code?: string;
  language_id?: number;
  // Add any additional properties needed for the submission
}
export interface Language {
  id: number;
  name: string;
  lang: string;
  fileName: string;
  codeExample: string;
  slug: string; // New slug field
}

export interface SubmitCodeRequest {
  language_id?: number | null;
  stdin?: string;
  source_code?: string;
  fileName?: string;
}
