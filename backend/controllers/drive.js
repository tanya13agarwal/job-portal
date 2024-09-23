const Drive = require('../models/Drive');

// Create a new drive
exports.createDrive = async (req, res) => {
    const { company, date, position, eligibility } = req.body;

    try {
        const drive = new Drive({ company, date, position, eligibility });
        await drive.save();
        res.json({ msg: 'Drive created successfully', drive });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Get all drives
exports.getAllDrives = async (req, res) => {
    try {
        const drives = await Drive.find();
        res.json(drives);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Get a single drive by ID
exports.getDriveById = async (req, res) => {
    try {
        const drive = await Drive.findById(req.params.id);
        if (!drive) return res.status(404).json({ msg: 'Drive not found' });
        res.json(drive);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Update a drive
exports.updateDrive = async (req, res) => {
    const { company, date, position, eligibility } = req.body;

    try {
        const drive = await Drive.findById(req.params.id);
        if (!drive) return res.status(404).json({ msg: 'Drive not found' });

        drive.company = company;
        drive.date = date;
        drive.position = position;
        drive.eligibility = eligibility;
        await drive.save();

        res.json({ msg: 'Drive updated successfully', drive });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Delete a drive
exports.deleteDrive = async (req, res) => {
    try {
        const drive = await Drive.findById(req.params.id);
        if (!drive) return res.status(404).json({ msg: 'Drive not found' });

        await drive.remove();
        res.json({ msg: 'Drive deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};
