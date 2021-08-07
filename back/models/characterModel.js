import mongoose from 'mongoose'
const SkillSchema = new mongoose.Schema({
    value:{
        type:Number,
        required: true,
        min: 0,
        max: 5,
        default:0
        
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
        required:true,
        min: 0,
        max: 5,
        default:0
    },
    stamina: {
        type: Number,
        required:true,
        min: 0,
        max: 5,
        default:0
    },
    charisma: {
        type: Number,
        required:true,
        min: 0,
        max: 5,
        default:0
    },
    manipulation: {
        type: Number,
        required:true,
        min: 0,
        max: 5,
        default:0
    },
    composure: {
        type: Number,
        required:true,
        min: 0,
        max: 5,
        default:0
    },
    intelligence: {
        type: Number,
        required:true,
        min: 0,
        max: 5,
        default:0
    },
    wits: {
        type: Number,
        required:true,
        min: 0,
        max: 5,
        default:0
    },
    resolve: {
        type: Number,
        required:true,
        min: 0,
        max: 5,
        default:0    },
    health: {
        type: Number,
        required:true,
        min: 0,
        max: 10,
        default:stamina+3
    },
    willpower: {
        type: Number,
        required:true,
        min: 0,
        max: 10,
        default:composure+resolve
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
    resonance:{
        type: String
    },
    hunger:{
        type: Number,
        min: 0,
        max: 5,
        default: 1
    },
    humanity:{
        type:Number,
        min:0,
        max:10,
        default:7
    },

    disciplines:{
        type: [String ]
    }


})

const Character = mongoose.model('Character', CharacterSchema)

export default Character