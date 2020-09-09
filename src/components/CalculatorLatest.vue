<template>
    <div>
        <div class="col-xs-12 col-md-7">
            <h1 class="text-center">ANCIENT CALCULATOR</h1>
            <h5 class="text-center">
                <span>
                    Clicker Heroes v1.0e10 (for v1.0e9, see <router-link :to="{name: 'old'}">here</router-link>)
                </span>
            </h5>
            <b-card
                border-variant="danger"
                header="INPUT"
                header-bg-variant="danger"
                header-text-variant="white"
            >
                <b-form-checkbox
                    v-model="viewMode"
                    :value="VIEW_MODE.DARK"
                    :unchecked-value="VIEW_MODE.LIGHT"
                >
                    Dark theme
                </b-form-checkbox>
                <b-container>
                    <b-row
                        class="align-items-center"
                    >
                        <b-form-input
                            class="col mr-1"
                            v-model="rawSaveGame"
                            placeholder="Paste save game here"
                        ></b-form-input>
                        <span>or</span>
                        <b-button
                            class="col ml-1"
                            variant="warning"
                        >
                            Load a save game
                        </b-button>
                    </b-row>
                </b-container>
                <b-form-input
                    type="number"
                    v-model.number="ascensionZone"
                    placeholder="Paste ascension zone here"
                ></b-form-input>
                <b-form-checkbox
                    v-model="useSoulsNextAscension"
                >
                    Use souls gained after ascension
                </b-form-checkbox>
                <b-form-checkbox
                    v-model="highLevelBestHero"
                >
                    Level 8000+ on best hero
                </b-form-checkbox>
            </b-card>
            <div class="panel panel-danger">
                <div class="panel-heading">
                    INPUT
                </div>
                <div class="panel-body">
                    <label>
                        <input id="useDarkTheme" type="checkbox" name="theme"> Dark theme
                    </label>
                    <div class="clearfix"></div>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <input type="text" id="sg" placeholder="Paste save game here" class="form-control"
                               style="width: 50%;" spellcheck="false">
                        <span style="margin: auto 10px;">or</span>
                        <button class="btn btn-warning" style="padding: 2px 15px; width: 50%;" id="btn_file_sg">Load a
                            save game
                        </button>
                        <input type="file" class="form-control" style="display: none;" id="file_sg">
                        <input type="hidden" id="saveGameType">
                    </div>
                    <div class="clearfix"></div>
                    <input type="text" id="ascensionZone" placeholder="Paste ascension zone here" class="form-control">
                    <div class="clearfix"></div>
                    <label>
                        <input type="checkbox" id="useNextAscensionSouls"> Use souls gained after ascension
                    </label>
                    <div class="clearfix"></div>
                    <label for="wep8k">
                        <input type="checkbox" id="wep8k"> Level 8000+ on best hero
                    </label>
                </div>
            </div>
            <div class="panel panel-default">
                <div class="panel-heading" style="padding: 0;">
                    <ul class="nav nav-pills">
                        <li><a class="btn btn-sm btn-success" data-toggle="tab" href="#tab-ancient">ANCIENTS</a></li>
                        <li><a class="btn btn-sm btn-success" data-toggle="tab" href="#tab-outsider">OUTSIDERS</a></li>
                        <li><a class="btn btn-sm btn-success" data-toggle="tab" href="#tab-clans">CLANS</a></li>
                    </ul>
                </div>
                <div class="tab-content panel-body">
                    <div class="tab-pane fade active in" id="tab-ancient">
                        <div id="tab-ancient-note">
                            <p>Notes:</p>
                            <ul>
                                <li>Recommended only for <u>players who have transcended.</u></li>
                                <li>Use <u>V-click</u> to level up your Ancients.</li>
                            </ul>
                        </div>
                        <div id="tab-ancient-autolevel" style="display: none; margin-bottom: 5px;">
                            <button class="btn btn-sm btn-success" id="btnAutoLevel" data-toggle="modal"
                                    data-target="#modalAutoLevel">Autolevel
                            </button>
                            <span class="small">(warning: can lag with large saves)</span>
                        </div>
                        <div class="form-inline">
                            <span>Playstyle:</span>
                            <select class="form-control" id="playstyleSelect">
                                <option value="idle" selected>Idle</option>
                                <option value="hybrid">Hybrid</option>
                                <option value="active">Active</option>
                            </select>
                            <span id="hybridRatioContainer" style="display: none;">
                            <span>Frag/Siya ratio: </span>
                        <input class="form-control" type="number" id="hybridRatio" min="0.1" max="1000" step="0.1"
                               value="1">
                        </span>
                        </div>
                        <div class="form-inline">
                            <input id="flagCalculateOtherAncients" type="checkbox">
                            <span>Vaagur, Revolc and skill ancients are</span>
                            <input class="form-control" type="number" id="otherAncientsLower" min="0" max="10" step="1"
                                   value="5">
                            <span>level lower than</span>
                            <select class="form-control" id="otherAncientsLowerBase">
                                <option value="13">Atman</option>
                                <option value="18">Bubos</option>
                                <option selected value="17">Chronos</option>
                                <option value="11">Dogcog</option>
                                <option value="14">Dora</option>
                                <option value="12">Fortuna</option>
                                <option value="21">Kumawakamaru</option>
                            </select>
                        </div>
                        <table class="table table-condensed table-hover" id="anctable">
                            <thead>
                            <tr class="bg-primary">
                                <th class="text-center">Ancient</th>
                                <th class="text-center">Current Level</th>
                                <th class="text-center">Optimal Level</th>
                                <th class="text-center">Change</th>
                                <th class="text-center">HS cost</th>
                            </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                    <div class="tab-pane fade" id="tab-outsider">
                        <table class="table table-condensed table-bordered" id="osdtable">
                            <tr class="bg-primary">
                                <th>Outsider</th>
                                <th>Level</th>
                                <th>Effect</th>
                            </tr>
                            <tr>
                                <td>Xyliqil</td>
                                <td class="number">0</td>
                                <td>+0% effective of all Idle bonuses</td>
                            </tr>
                            <tr>
                                <td>Chor'gorloth</td>
                                <td class="number">0</td>
                                <td>-0% Ancient cost</td>
                            </tr>
                            <tr>
                                <td>Phandoryss</td>
                                <td class="number">0</td>
                                <td>+0% DPS</td>
                            </tr>
                            <tr style="display: none;">
                                <td>Borb</td>
                                <td class="number">0</td>
                                <td>+0% maximum transcendent primal soul reward</td>
                            </tr>
                            <tr>
                                <td>Ponyboy</td>
                                <td class="number">0</td>
                                <td>+0% Primal Hero Souls</td>
                            </tr>
                            <tr>
                                <td>Borb</td>
                                <td class="number">0</td>
                                <td>+0% effectiveness of Kumawakamaru</td>
                            </tr>
                            <tr>
                                <td>Rhageist</td>
                                <td class="number">0</td>
                                <td>+0% effectiveness of Atman</td>
                            </tr>
                            <tr>
                                <td>K'Ariqua</td>
                                <td class="number">0</td>
                                <td>+0% effective of Bubos</td>
                            </tr>
                            <tr>
                                <td>Orphalas</td>
                                <td class="number">0</td>
                                <td>+0% effective of Chronos</td>
                            </tr>
                            <tr>
                                <td>Sen-Akhan</td>
                                <td class="number">0</td>
                                <td>+0% effective of Dora</td>
                            </tr>
                            <tr>
                                <td colspan="3">
                                    Transcendent Power: <span id="tp">0</span>%
                                    <br>Total AS: <span id="as">0</span> (transcend now for +<span
                                    id="asGainIfTranscend">0</span>)
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3">
                                    <div style="float: left;">
                                        You gain:
                                        <button class="btn btn-sm btn-primary" id="buttonLessAS"><i
                                            class="fa fa-chevron-up"></i></button>
                                        <button class="btn btn-sm btn-primary" id="buttonMoreAS"><i
                                            class="fa fa-chevron-down"></i></button>
                                        <br>+<span id="asGain1">0</span> AS by earning <span id="hsToGain1">0</span>
                                        more HS
                                        <br>+<span id="asGain2">0</span> AS by earning <span id="hsToGain2">0</span>
                                        more HS
                                        <br>+<span id="asGain3">0</span> AS by earning <span id="hsToGain3">0</span>
                                        more HS
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="tab-pane fade" id="tab-clans">
                        <p>Immortal Damage: <span id="immortalDamage">0</span></p>
                        <p>Highest Boss Level To Beat (3 tries, <span id="ac">0 Autoclickers</span>): <span
                            id="highestBossLevel">0</span></p>
                    </div>
                </div>
            </div>
        </div>
        <div id="modalAutoLevel" class="modal fade" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Auto Level</h4>
                    </div>
                    <div id="modalAsk">
                        <div class="modal-body">
                            <p>You are using the option to autolevel your ancients. Notes that this is considered
                                save-editing. Please make back-ups save and use with caution.</p>
                        </div>
                        <div class="modal-footer">
                            <button id="btnAutoShow" type="button" class="btn btn-sm btn-default">Got It Dude!</button>
                        </div>
                    </div>
                    <div id="modalShow" style="display: none;">
                        <div class="modal-body">
                            <p>Here is your save:</p>
                            <textarea class="form-control" style="resize: none;"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {VIEW_MODE} from '@/components/constants';

export default {
    name: 'CalculatorLatest',
    data() {
        return {}
    },
    created() {
        this.VIEW_MODE = VIEW_MODE;
    },
    computed: {
        viewMode: {
            get() {
                return this.$store.getters.viewMode;
            },
            set(value) {
                this.$store.dispatch('setViewMode', value);
            }
        },
        rawSaveGame: {
            get() {
                return this.$store.getters.rawSaveGame;
            },
            set(value) {
                this.$store.dispatch('setRawSaveGame', value);
            }
        },
        ascensionZone: {
            get() {
                return this.$store.getters.ascensionZone;
            },
            set(value) {
                this.$store.dispatch('setAscensionZone', value);
            }
        },
        useSoulsNextAscension: {
            get() {
                return this.$store.getters.useSoulsNextAscension;
            },
            set(value) {
                this.$store.dispatch('setUseSoulsNextAscension', value);
            }
        },
        highLevelBestHero: {
            get() {
                return this.$store.getters.highLevelBestHero;
            },
            set(value) {
                this.$store.dispatch('setHighLevelBestHero', value);
            }
        }
    }
}
</script>

<style scoped>

</style>