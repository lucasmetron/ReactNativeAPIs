import fs from 'react-native-fs'

export const PictureService = {

    async save(filepath) {
        if (filepath.startsWith('http')) {
            filepath = await PictureService.saveRemote(filepath);
        }
        return filepath
    },

    async saveRemote(fromURL) {
        const toFile = `${fs.DocumentDirectoryPath}/${Date.now()}.png`;
        const result = await fs.downloadFile({
            fromUrl: fromURL,
            toFile: toFile,
        });
        return 'file://' + toFile;
    },


}