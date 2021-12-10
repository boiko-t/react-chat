const ChatView = ({ id }) => {
  return (
    <div className="scrollbar-y scrollbar-color-primary h-screen overflow-y-auto w-2/3 bg-primary-300">
      {messages.map((message, i) => (
        <div key={i}>
          <p>{message.text}</p>
          <p>{message.timeSent}</p>
        </div>
      ))}
    </div>
  );
};

export default ChatView;

const messages = [
  {
    text: 'sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum',
    timeSent: '3:31',
  },
  {
    text: 'hac habitasse',
    timeSent: '22:39',
  },
  {
    text: 'quis odio consequat varius integer',
    timeSent: '11:03',
  },
  {
    text: 'neque sapien placerat',
    timeSent: '12:17',
  },
  {
    text: 'nec dui luctus rutrum nulla tellus in',
    timeSent: '22:11',
  },
  {
    text: 'porttitor lacus at turpis donec posuere',
    timeSent: '0:09',
  },
  {
    text: 'platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo',
    timeSent: '14:40',
  },
  {
    text: 'ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla',
    timeSent: '13:03',
  },
  {
    text: 'integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero',
    timeSent: '1:20',
  },
  {
    text: 'id massa',
    timeSent: '6:40',
  },
  {
    text: 'a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id',
    timeSent: '17:26',
  },
  {
    text: 'tortor',
    timeSent: '3:03',
  },
  {
    text: 'in quis justo maecenas rhoncus aliquam lacus morbi quis tortor',
    timeSent: '17:17',
  },
  {
    text: 'ipsum',
    timeSent: '4:54',
  },
  {
    text: 'semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero',
    timeSent: '4:10',
  },
  {
    text: 'nec condimentum neque',
    timeSent: '17:18',
  },
  {
    text: 'convallis nulla neque libero convallis eget eleifend luctus',
    timeSent: '21:53',
  },
  {
    text: 'bibendum imperdiet',
    timeSent: '5:02',
  },
  {
    text: 'ut massa quis augue luctus',
    timeSent: '11:46',
  },
  {
    text: 'ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor',
    timeSent: '7:34',
  },
  {
    text: 'id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante',
    timeSent: '3:55',
  },
  {
    text: 'placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget',
    timeSent: '20:03',
  },
  {
    text: 'molestie sed justo pellentesque viverra pede ac diam cras',
    timeSent: '2:51',
  },
  {
    text: 'ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam',
    timeSent: '5:55',
  },
  {
    text: 'lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum',
    timeSent: '17:19',
  },
  {
    text: 'ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices',
    timeSent: '17:30',
  },
  {
    text: 'nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus',
    timeSent: '0:34',
  },
  {
    text: 'posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat',
    timeSent: '10:00',
  },
  {
    text: 'semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla',
    timeSent: '23:00',
  },
  {
    text: 'justo aliquam quis turpis eget',
    timeSent: '3:42',
  },
];
