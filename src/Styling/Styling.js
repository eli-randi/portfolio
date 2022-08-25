import './Styling.css'

export const sectionHeaders = (header, direction) => {
  return (
    <div className="SectionHeader">
      {direction === 'left' ? <div className='SectionHeaderLine'></div> : null}
      <div className='SectionHeaderText'>
        <h1>{header}</h1>
      </div>
      {direction === 'right' ? <div className='SectionHeaderLine'></div> : null}
    </div>
  )
} 