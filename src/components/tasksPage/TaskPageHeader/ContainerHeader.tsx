import UserType from "../../../utils/UserType";
export default function ContainerHeader(props: UserType){
  const { name, imageUrl } = props;
  return (
    <div>
      <h3>to do</h3>
      <div>
        <p>{name ?? 'name'}</p>
        <img src={imageUrl} alt='avatar' />
      </div>
    </div>
  );
}