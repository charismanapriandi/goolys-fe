declare namespace CursorContext {
  export type Image = string | null;
  export type Text = string | null;
  export type Value = {
    image: {
      value: CursorContext.Image,
      set: (e: string) => void;
      reset: () => void;
    };
    text: {
      value: CursorContext.Text,
      set: (e: string) => void;
      reset: () => void;
    };
  }
}
