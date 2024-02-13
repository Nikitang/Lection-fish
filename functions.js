
const addNewFishing = (obj, ...settings) => {
        const newFishing = {
            number: settings[0],
            date: settings[1],
            location: settings[2],
            weather: settings[3],
            weight: settings[4],
            fishName: settings[5],
        };
        obj.fishing.push(newFishing);
    return obj;
}

const getFishName = (obj, number) => {
    for (const item of obj.fishing) {
        if (item.number === number) return item.fishName;
    }
};

const renameFish = (obj, number, newName) => {
    for (const item of obj.fishing) {
        if (item.number === number) return item.fishName = newName;
    }
};

export { addNewFishing, getFishName, renameFish};