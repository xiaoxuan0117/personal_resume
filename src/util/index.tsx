export const newLine = (context: string): JSX.Element[] | undefined => {
  if (typeof context === "string") {
    return context.split("\n").map((text) => <p key={text}>{text}</p>);
  }
  return;
};
