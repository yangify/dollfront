import ApkItem  from "./apk_item";

export const ApkList = ({ apks }) => {
    return (
        <div className="list-group list-group-flush">
            { apks.map((apk, index) => (
                <ApkItem key={index} apk={apk} />
            ))}
        </div>
    );
}
