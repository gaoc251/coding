class VirtualizedList extends Component {
    constructor (props) {
      super(props)
      
      this.state = {
        startOffset: 0,
        endOffset: 0,
        visibleData: []
      }
      
      this.data = new Array(1000).fill(true)
      this.startIndex = 0
      this.endIndex = 0
      this.scrollTop = 0
    }
    
    render () {
      const {startOffset, endOffset} = this.state
      
      return (
        <div className='wrapper'>
          <div style={{ paddingTop: `${startOffset}px`, paddingBottom: `${endOffset}px` }}>
            {
              // render list
            }
          </div>
        </div>
      )
    }
  }