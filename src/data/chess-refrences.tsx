import Image from "next/image";

interface ChessRefrencesDataType {
  title: string;
  link: string;
  icon: React.ReactNode;
  linkTag: string;
}

export const ChessRefrencesData: ChessRefrencesDataType[] = [
  {
    title: "فدراسیون شطرنج جهانی فیده",
    link: "https://www.fide.com/",
    icon: (
      <Image
        draggable={false}
        src={"https://www.fide.com/img/logo1.png"}
        alt="فدراسیون شطرنج فیده جهانی"
        width={800}
        height={800}
        className="w-full p-2 rounded-full"
        unoptimized
      />
    ),
    linkTag: "fide.com",
  },
  {
    title: "فدراسیون شطرنج ایران",
    link: "https://members.ircf.ir/",
    linkTag: "ircf.ir",
    icon: (
      <Image
        draggable={false}
        src={
          "https://members.ircf.ir/Content/Panel/assets/images/pages/login.png"
        }
        alt="فدراسیون شطرنج ایران"
        width={800}
        height={800}
        className="w-full p-2 rounded-full"
        unoptimized
      />
    ),
  },
  {
    title: "وبسایت آچمز",
    link: "http://www.achmaz.ir//",
    icon: (
      <Image
        draggable={false}
        src={"http://www.achmaz.ir/files/uploads/1494313193.Achmaz-Logo.png"}
        alt="وبسایت آچمز"
        width={800}
        height={800}
        className="w-full p-2"
        unoptimized
      />
    ),
    linkTag: "achmaz.ir",
  },
  {
    title: "وبسایت لیچس",
    link: "http://www.lichess.org/",
    icon: (
      <Image
        draggable={false}
        src={"https://lichess1.org/assets/logo/lichess-favicon-192.png"}
        alt="وبسایت لیچس"
        width={800}
        height={800}
        className="w-full rounded-full p-2"
        unoptimized
      />
    ),
    linkTag: "lichess.org",
  },
  {
    title: "سایت چس دات کام",
    link: "https://www.chess.com",
    icon: (
      <Image
        draggable={false}
        src={"https://www.chess.com/bundles/web/favicons/favicon.5d6cb047.svg"}
        alt="سایت چس دات کام"
        width={800}
        height={800}
        className="w-full rounded-full p-3"
        unoptimized
      />
    ),
    linkTag: "chess.com",
  },
  {
    title: "ریتینگ لایو برترین بازیکنان",
    link: "https://2700chess.com/",
    icon: (
      <Image
        draggable={false}
        src={"https://2700chess.com/favicon-32x32.png"}
        alt="ریتینگ لایو برترین بازیکنان"
        width={800}
        height={800}
        className="w-full rounded-full p-3"
        unoptimized
      />
    ),
    linkTag: "2700chess.com",
  },
  {
    title: "وبسایت اخبار شطرنج دنیا",
    link: "https://en.chessbase.com",
    icon: (
      <Image
        draggable={false}
        src={
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAA3lBMVEX///8AAADmIymhMjHkAADwJCpIEhPaubmXAACcHx7lAxH1uLnrJCrmGyLlChXlAA375eXV1dWbMzJycnK6ublLDhAwLCzo6OhdW1z3xsfc3NwoJCT29fVjY2PKKi1LS0vGxcW3Li9zERSOi4vzqqv63NzpSEzqWl340NA2AAC6dXT17OxkFRaeKCfv4OB0Cg7eKCw5NjYyODiBMDGaExGBgYHfrq8aFBSsLy+eXF2bmJjHkJEjLS2KAADnm52qRUezHCCrq6vymJnug4XrZmjnOj7tc3a4aGqXeHgnAwS5USCtAAACr0lEQVRIiZ3UC3eaMBQH8JimWysmBnEKiMNNEDbWtWxru3Wv8pBt3/8L7RKRR8Qi/R/PuXhOfueS3ChCz84AAmUOxYaqQn13IeV90A5nBdQL+OFMytXFx5Pg9c1EpmeHcBGGtjW3zFkYalBXs/DT5/PXsvzS0nLXNYRiQl1CNcYjWV6+bHNWcTA51ATEsuyGu44Yj95MOqBqmqqt65ppmitd12+h3jEsyxYIXe5RNce86/UI5/JrJ5TH8VbAhmyHCwnuOjZkC1xqmqaq6grKGuoU6jeKi5xwqs05YlmePMd9bnrPsZSTY3AKWUOgRFAeoH5nWJZPz1FH9TkW2V2+XnOsy3b4Q+rYhEK2wJ+Xl1eO4/yC+ruoj02YX9sWSEajEYNAoUWVXC7boLyqLaPHZ0I8vMvXqnOrN1SKA7wPbS3qC6NBkYXVDy73UNzoHnBQpRdUDyEjFA/r6+h4TA/g+gCymCfEhwcKq/MPTV3fo+W3As4q97CDQ7RFBG23zPMYThlLWeLGnGw8RlPKvA0V0Go2FK+KSEKQ4Xqce9xwFMPPuKN4Ac98w8h4ABLgtHLTAlJECHSELjz2HeL4JLFcZ+jxWDGI4/JEQK10IaogElBJvbGhkNjNfIo23ImJYzhO5glYNVT3kCA/ILAw5UEaKIahBBniRuzy2FV4xi0BzdIta3c1wdTD3jBNGU4oS262KRxMttnQBA/hMT+c8r4N5jUoDp6W4ygGUx+HYe/dutevgymNUQgows478mfvoj3keYK/r/K8OJ5/hbtv/g1UO+/KquGm3aCI3XCrk93AbL6p+WB3mzzawX8dsiL9BGgdQvHKWodbt7s86nrxBDzu8syPbjh6GuYbni5b3KLT7TZ8K0P1NIjkDdvdoJZ5VG543guicsO3fZ0IbPjI7HvnP+C5T2H5urNMAAAAAElFTkSuQmCC"
        }
        alt="وبسایت اخبار شطرنج دنیا"
        width={800}
        height={800}
        className="w-full rounded-full p-3"
        unoptimized
      />
    ),
    linkTag: "en.chessbase.com",
  },
  {
    title: "وبسایت آموزش شطرنج",
    link: "https://www.chessable.com/",
    icon: (
      <Image
        draggable={false}
        src={"https://www.chessable.com/img/fav/android-chrome-192x192.png"}
        alt="وبسایت جهانی آموزش شطرنج"
        width={800}
        height={800}
        className="w-full rounded-full p-2"
        unoptimized
      />
    ),
    linkTag: "chessable.com",
  },
];
