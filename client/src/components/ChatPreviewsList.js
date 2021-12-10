import ChatPreview from './ChatPreview';
import CurrentUserInfo from './CurrentUserInfo';

const ChatPreviewsList = ({ dialogs }) => {
  return (
    <div className="h-screen w-1/3">
      <CurrentUserInfo className="h-20" />
      <div
        className="scrollbar-y overflow-y-auto scrollbar-color-primary"
        style={{ height: 'calc(100vh - 5rem)' }}
      >
        {data.map((dialog) => (
          <ChatPreview
            key={dialog.id}
            id={dialog.id}
            avatar={dialog.avatar}
            name={dialog.name}
            preview={dialog.preview}
            isOpened={dialog.isOpened}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatPreviewsList;

const data = [
  {
    id: 1,
    name: 'Wylie Billion',
    avatar: null,
    // avatar:
    //   'https://robohash.org/adipisciessevoluptatem.png?size=50x50&set=set1',
    preview: 'penatibus et magnis dis montes',
  },
  {
    id: 2,
    name: 'Kelli Murrells',
    avatar:
      'https://robohash.org/possimusvoluptatesnulla.png?size=50x50&set=set1',
    preview: 'vestibulum eget vulputate ut',
    isOpened: true,
  },
  {
    id: 3,
    name: 'Rab Zarfai',
    avatar: 'https://robohash.org/omnisiurevel.png?size=50x50&set=set1',
    preview: 'congue diam id ornare',
  },
  {
    id: 4,
    name: 'Seana Chapelhow',
    avatar: 'https://robohash.org/deseruntnullaaut.png?size=50x50&set=set1',
    preview: 'parturient montes nascetur ridiculus mus',
  },
  {
    id: 5,
    name: 'Phelia Mumberson',
    avatar:
      'https://robohash.org/magnamquaeratdeserunt.png?size=50x50&set=set1',
    preview: 'tempus semper est quam',
  },
  {
    id: 6,
    name: 'Carmine Beauchop',
    avatar: 'https://robohash.org/nesciuntetad.png?size=50x50&set=set1',
    preview: 'diam neque vestibulum',
  },
  {
    id: 7,
    name: 'Beatriz Rean',
    avatar: 'https://robohash.org/mollitiaverotempore.png?size=50x50&set=set1',
    preview: 'in est risus',
  },
  {
    id: 8,
    name: 'Willy McNelis',
    avatar: 'https://robohash.org/autnequevelit.png?size=50x50&set=set1',
    preview: 'ut massa volutpat convallis morbi',
  },
  {
    id: 9,
    name: 'Selle Conor',
    avatar:
      'https://robohash.org/ipsamaccusamuslaudantium.png?size=50x50&set=set1',
    preview: 'integer a nibh in',
  },
  {
    id: 10,
    name: 'Harli Pletts',
    avatar: 'https://robohash.org/eteaeos.png?size=50x50&set=set1',
    preview: 'mauris sit amet',
  },
  {
    id: 11,
    name: 'Emmye Trevers',
    avatar: 'https://robohash.org/utautemquis.png?size=50x50&set=set1',
    preview: 'suspendisse potenti nullam porttitor',
  },
  {
    id: 12,
    name: 'Mose Dedam',
    avatar: 'https://robohash.org/estpraesentiumaut.png?size=50x50&set=set1',
    preview: 'sit amet lobortis sapien sapien non',
  },
  {
    id: 13,
    name: 'Caterina Manterfield',
    avatar:
      'https://robohash.org/cumcommodiexercitationem.png?size=50x50&set=set1',
    preview: 'iaculis justo in hac habitasse',
  },
  {
    id: 14,
    name: 'Basile Shearme',
    avatar: 'https://robohash.org/suntistequis.png?size=50x50&set=set1',
    preview: 'sit amet sem fusce',
  },
  {
    id: 15,
    name: 'Corny Sands',
    avatar: 'https://robohash.org/inrepellateum.png?size=50x50&set=set1',
    preview: 'ut nulla sed accumsan',
  },
];
