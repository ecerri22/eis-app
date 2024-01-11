function ContainerHeaderTitle({ txtcol, headerTitle }) {
  const titleStyle = {
    color: txtcol || 'white', 
  };

  let displayedTitle = headerTitle; 

  if (typeof headerTitle === 'object') {
    displayedTitle = headerTitle?.[0]?.coursecode || '';
  }

  return (
    <div className='text-lg tracking-wide' style={titleStyle}>
      {displayedTitle}
    </div>
  );
}

export default ContainerHeaderTitle;
