const styles = {
  homeScreenContainer: {
    display: 'flex',
    flex: 1,
    width: '100%',
    height: '100%',
  },
  headerBarContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.8,
    backgroundColor: '#fff',
  },
  drawerButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  titleStyle: {
    fontSize: 15,
    color: '#3d3d3d',
    right: '0.5%',
  },
  addUserContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  addUserStyle: {
    fontSize: 13,
    color: '#4871EE',
    left: '15%',
  },
  victimTopInfoContainer: {
    display: 'flex',
    flex: 0.6,
    flexDirection: 'row',
    borderBottomRightRadius: 30,
    backgroundColor: '#fff',
  },
  victimImageContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    left: '20%',
    top: '2.75%',
  },
  victimNameStyle: {
    fontWeight: 'bold',
    fontSize: 28,
    right: '8%',
  },
  victimBottomInfoContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'flex-start',
    top: '2.75%',
  },
  statusContainer: {
    flex: 1.5,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    height: '37.5%',
    marginLeft: '6%',
    paddingLeft: '2.5%',
    marginRight: '6%',
  },
};

export default styles;
