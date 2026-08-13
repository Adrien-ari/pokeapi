function Users(prop){
   const { firstName,name } = prop;
   return(
    <>
        <p>LastName: { firstName }</p>
        <p>FirstName: { name }</p>
    </>
   )
}

export default  Users;