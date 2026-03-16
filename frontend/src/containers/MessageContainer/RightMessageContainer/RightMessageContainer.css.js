import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles(() => ({
  root: {
    width: '256px',
    background: 'white',
    borderLeft: '1px solid #E8ECF0',
    display: 'flex',
    flexDirection: 'column',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: '16px 14px 12px',
    justifyContent: 'space-between',
    borderBottom: '1px solid #E8ECF0',
  },
  numberOfRoom: {
    color: '#B0BAC9',
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  RoomCardContainer: {
    padding: '10px',
  },
  line: {
    height: '1px',
    background: ' #E8ECF0',
  },
  lastLine: {
    height: '1px',
    background: ' #E8ECF0',
    margin: '4px 10px 10px',
  },
  recentMemberContainer: {
    padding: '0 10px 12px',
  },
  memberList: {
    display: 'flex',
    flexDirection: 'row',
  },
  avatar: {
    width: '32px',
    height: '32px',
    fontSize: '12px',
  },
  greenDot: {
    backgroundColor: 'chartreuse',
    width: '11px',
    height: '11px',
    position: 'absolute',
    bottom: '0px',
    right: '1px',
    borderRadius: '50%',
  },
  avatarOrange: {
    background: 'linear-gradient(135deg, #FFF0E6, #FFD4BA)',
    color: '#FA8C16',
  },
  avatarOrangeGray: {
    background: 'linear-gradient(135deg, #FFF0E6, #FFD4BA)',
    color: '#FA8C16',
  },
  avatarGreen: {
    background: 'linear-gradient(135deg, #F0FFE6, #C8F0BA)',
    color: ' #52C41A',
  },
  dotOrange: {
    backgroundColor: '#FA8C16',
  },
  dotGray: {
    backgroundColor: '#C0C8D4',
  },
  badgeNone: {
    display: 'none',
  },
  memberListContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: '6px',
  },
  generic: {
    padding: '0 10px',
  },
}))
