import classes from './MeetupItem.module.css';

function MeetupItem(props) {
  return (
    <li className={classes.item}>
      <div classNAME={classes.image}>
        <img src={props.img} alt={props.title} />
      </div>
      <div classNAME={classes.content}>
        <h3>{props.title[</h3>
        <address>p{rops.address]</address>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
        <button>To Favorties</button>
      </div>
    </li>
  );
}

export default MeetupItem;