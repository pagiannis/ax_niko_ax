interface Props {
  language: "gr" | "en" | "de" | "ro" | "bg" | "sr";
}

const FrozenFooter = ({ language }: Props) => {
  const frozenLabels = {
    gr: "* Καταψυγμένα",
    en: "* Frozen",
    de: "* Gefroren",
    ro: "* Congelate",
    bg: "* Замразени",
    sr: "* Смрзнуто",
  };

  return (
    <div className="text-center font-sans font-bold">
      {frozenLabels[language] || frozenLabels.en}
    </div>
  );
};

export default FrozenFooter;
