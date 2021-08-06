import mongoose from 'mongoose'
const SkillSchema = new mongoose.Schema({
    value:{
        type:Number,
        required: true
    },
    specialities:{
        type:String
    }
})

const CharacterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    sire: {
        type: String,
        trim: true,
    },
    concept: {
        type: String,
        trim: true,
    },
    ambition: {
        type: String,
        trim: true,
    },
    chronicle: {
        type: String,
        trim: true,
    },
    desire: {
        type: String,
        trim: true,
    },
    predator: {
        type: String,
        trim: true,
        required:true
    },
    clan:{
        type: String,
        trim: true,
        lowercase: true,
        required:true
    },
    generation: {
        type: Number,
        required:true
    },
    strength: {
        type: Number,
        required:true
    },
    dexterity: {
        type: Number,
        required:true
    },
    stamina: {
        type: Number,
        required:true
    },
    charisma: {
        type: Number,
        required:true
    },
    manipulation: {
        type: Number,
        required:true
    },
    composure: {
        type: Number,
        required:true
    },
    intelligence: {
        type: Number,
        required:true
    },
    wits: {
        type: Number,
        required:true
    },
    resolve: {
        type: Number,
        required:true
    },
    health: {
        type: Number,
        required:true
    },
    willpower: {
        type: Number,
        required:true
    },
    athletics: {
        type: SkillSchema
    },
    brawl:{
        type: SkillSchema
    },
    craft:{
        type: SkillSchema
    },
    drive:{
        type: SkillSchema
    },
    firearms:{
        type: SkillSchema
    },
    larceny:{
        type: SkillSchema
    },
    melee:{
        type: SkillSchema
    },
    stealth:{
        type: SkillSchema
    },
    survival:{
        type: SkillSchema
    },
    animalken:{
        type: SkillSchema
    },
    etiquette:{
        type: SkillSchema
    },
    insight:{
        type: SkillSchema
    },
    intimidation:{
        type: SkillSchema
    },
    leadership:{
        type: SkillSchema
    },
    performance:{
        type: SkillSchema
    },
    persuasion:{
        type: SkillSchema
    },
    streetwise:{
        type: SkillSchema
    },
    subterfuge:{
        type: SkillSchema
    },
    academics:{
        type: SkillSchema
    },
    awerness:{
        type: SkillSchema
    },
    finance:{
        type: SkillSchema
    },
    investigation:{
        type: SkillSchema
    },
    medicine:{
        type: SkillSchema
    },
    occult:{
        type: SkillSchema
    },
    politics:{
        type: SkillSchema
    },
    science:{
        type: SkillSchema
    },
    technology:{
        type: SkillSchema
    },



})

const Character = mongoose.model('Character', CharacterSchema)

export default Character