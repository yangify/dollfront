export const UploadCard = () => {
    return (
        <div className="card">
            <div className="card-header">
                Upload
            </div>
            <form method="post" encType="multipart/form-data">
                <div className="card-body text-center overflow-auto">
                    <input type="file" className="form-control-file" />
                </div>
                <div className="card-footer text-center">
                    <input type="submit" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
}
