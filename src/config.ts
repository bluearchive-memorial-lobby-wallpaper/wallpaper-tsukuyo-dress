import {
  assertWallpaperDefinition,
  createDialogueLineResolver,
  defineWallpaper,
} from "ba-memorial-lobby-wallpaper-runtime";

export type VoiceLocale = "ja" | "zh-cn" | "ko";
export type SubtitleLocale = "zh-cn" | "ja" | "ko" | "en";

// ---------------------------------------------------------------------------
// Project identity.
//
// This file is the single source of truth for character-specific content.
// Replace every placeholder value with the actual character data before
// building a wallpaper from this template. See docs/CREATING-A-PROJECT.md.
// ---------------------------------------------------------------------------
export const PROJECT = {
  id: "blue-archive-tsukuyo-dress",
  slug: "tsukuyo-dress",
  title: "Tsukuyo (Dress)",
  editionLabel: `PUBLIC EDITION · ${__WALLPAPER_VERSION__}`,
} as const;

export const VOICE_LOCALES: readonly VoiceLocale[] = ["ja","ko"];
export const SUBTITLE_LOCALES: readonly SubtitleLocale[] = ["ja","ko","en"];

export const BGM = {
  title: "Daily Routine 247",
  path: `./assets/${PROJECT.slug}/bgm/my-character-bgm.flac`,
} as const;

export interface DialogueLine {
  id: string;
  text: Record<SubtitleLocale, string>;
}

export interface DialogueDefinition {
  index: number;
  motionAnimation: string;
  attachmentAnimation: string;
  duration: number;
  lines: readonly DialogueLine[];
}

// Replace the placeholder model/animation/bone values below with values
// obtained from `npm run inspect:spine` after placing the real model in
// local-assets/original/model/.
export const MODEL = {
  binary: `./assets/${PROJECT.slug}/model/my-character.skel`,
  atlases: {
    "2k": `./assets/${PROJECT.slug}/model/my-character.atlas`,
    "4k": `./assets/${PROJECT.slug}/model-4k/my-character.atlas`,
    "8k": `./assets/${PROJECT.slug}/model-8k/my-character.atlas`,
  },
  spineVersion: "4.2.33",
  introAnimation: "Start_Idle_01",
  idleAnimation: "Idle_01",
  designViewport: {
    width: 2560,
    height: 1600,
    centerX: 0,
    centerY: 900,
  },
  tracks: {
    base: 0,
    motion: 1,
    attachment: 2,
  },
  interaction: {
    eyeBone: "Touch_Eye",
    headControlBone: "Touch_Point",
    headAnchorBone: "Touch_Point_Key",
    lookAnimation: "Look_01_M",
    lookEndMotionAnimation: "LookEnd_01_M",
    lookEndAttachmentAnimation: "LookEnd_01_A",
    patMotionAnimation: "Pat_01_M",
    patAttachmentAnimation: "Pat_01_A",
    patEndMotionAnimation: "PatEnd_01_M",
    patEndAttachmentAnimation: "PatEnd_01_A",
    headRadius: { x: 270, y: 230 },
    bodyFromHead: { x: -70, y: -610, radiusX: 620, radiusY: 900 },
    eyeClamp: { x: 112.5, y: 200 },
    patClamp: 34,
    dragThresholdPixels: 9,
    cooldownSeconds: 0.55,
    dialogueGraceSeconds: 0.75,
  },
} as const;

// Example dialogue placeholders. Replace the ids with the real event ids used
// by the voice files and fill in the localized subtitle text.
export const DIALOGUES: readonly DialogueDefinition[] = [
  {
    "index": 1,
    "motionAnimation": "Talk_01_M",
    "attachmentAnimation": "Talk_01_A",
    "duration": 14.666666984558105,
    "lines": [
      {
        "id": "ch0297_memoriallobby_1_1",
        "text": {
          "zh-cn": "",
          "ja": "うぅっ……。",
          "ko": "우읏……. ",
          "en": "Ugh... "
        }
      },
      {
        "id": "ch0297_memoriallobby_1_2",
        "text": {
          "zh-cn": "",
          "ja": "なんとか、フェンスは\n越えられました、けど……。",
          "ko": "어떻게 펜스는\n넘어가기는 했는데요……. ",
          "en": "I cleared the fence...somehow... "
        }
      }
    ]
  },
  {
    "index": 2,
    "motionAnimation": "Talk_02_M",
    "attachmentAnimation": "Talk_02_A",
    "duration": 15.833333969116211,
    "lines": [
      {
        "id": "ch0297_memoriallobby_2_1",
        "text": {
          "zh-cn": "",
          "ja": "服が引っかかって……。",
          "ko": "옷이 걸려 버려서…….",
          "en": "But my clothes got stuck..."
        }
      },
      {
        "id": "ch0297_memoriallobby_2_2",
        "text": {
          "zh-cn": "",
          "ja": "動けない、です……。",
          "ko": "움직일 수가 없어요…….",
          "en": "And I can't move..."
        }
      }
    ]
  },
  {
    "index": 3,
    "motionAnimation": "Talk_03_M",
    "attachmentAnimation": "Talk_03_A",
    "duration": 17.83333396911621,
    "lines": [
      {
        "id": "ch0297_memoriallobby_3_1",
        "text": {
          "zh-cn": "",
          "ja": "うぅ……ごめんなさい……。",
          "ko": "우으…… 죄송해요……. ",
          "en": "Ugh... I'm sorry... "
        }
      },
      {
        "id": "ch0297_memoriallobby_3_2",
        "text": {
          "zh-cn": "",
          "ja": "私が、近道を\nしようとしたから……。",
          "ko": "제가 괜히 지름길로\n가자고 해버려서……. ",
          "en": "It's all because I suggested we take a shortcut... "
        }
      }
    ]
  },
  {
    "index": 4,
    "motionAnimation": "Talk_04_M",
    "attachmentAnimation": "Talk_04_A",
    "duration": 20.666667938232422,
    "lines": [
      {
        "id": "ch0297_memoriallobby_4_1",
        "text": {
          "zh-cn": "",
          "ja": "……あれ？\n先生は、どうやって\n向こう側に……？",
          "ko": "……어라? 선생님은,\n어떻게 건너편에……? ",
          "en": "...Huh? How are you on the other side, Sensei...? "
        }
      },
      {
        "id": "ch0297_memoriallobby_4_2",
        "text": {
          "zh-cn": "",
          "ja": "えっ？\nフェンスの横に、\nくぐり戸……！？",
          "ko": "네?! 펜스 옆에\n쪽문이……?!",
          "en": "What?! There was a gate next to the fence...?!"
        }
      }
    ]
  },
  {
    "index": 5,
    "motionAnimation": "Talk_05_M",
    "attachmentAnimation": "Talk_05_A",
    "duration": 26.83333396911621,
    "lines": [
      {
        "id": "ch0297_memoriallobby_5_1",
        "text": {
          "zh-cn": "",
          "ja": "ううぅ……\nそうとも知らず、\n私は……。",
          "ko": "으우우우……\n그런 것도 모르고,\n저는……. ",
          "en": "Ugh... I didn't know that, I... "
        }
      },
      {
        "id": "ch0297_memoriallobby_5_2",
        "text": {
          "zh-cn": "",
          "ja": "……先生……私の服、\n少し引っ張っていただいても、\n良いでしょうか？",
          "ko": "……선생님, 철조망에\n걸린 부분을 좀 들어서\n풀어주실 수 있으신가요?  ",
          "en": "...Sensei, can you free the part that got stuck and help me out?"
        }
      }
    ]
  }
] as const;

export function voicePath(eventId: string, locale: VoiceLocale): string {
  return `./assets/${PROJECT.slug}/audio/${locale}/${eventId.toLowerCase()}.ogg`;
}

export const WALLPAPER_DEFINITION = defineWallpaper({
  schemaVersion: 1,
  id: PROJECT.id,
  model: {
    binary: MODEL.binary,
    atlases: MODEL.atlases,
    spineVersion: MODEL.spineVersion,
    designViewport: MODEL.designViewport,
  },
  animations: {
    intro: MODEL.introAnimation,
    idle: MODEL.idleAnimation,
    tracks: MODEL.tracks,
  },
  interactions: {
    eyeBone: MODEL.interaction.eyeBone,
    headControlBone: MODEL.interaction.headControlBone,
    headAnchorBone: MODEL.interaction.headAnchorBone,
    look: {
      animation: MODEL.interaction.lookAnimation,
      endMotionAnimation: MODEL.interaction.lookEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.lookEndAttachmentAnimation,
    },
    pat: {
      motionAnimation: MODEL.interaction.patMotionAnimation,
      attachmentAnimation: MODEL.interaction.patAttachmentAnimation,
      endMotionAnimation: MODEL.interaction.patEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.patEndAttachmentAnimation,
    },
    headRadius: MODEL.interaction.headRadius,
    bodyFromHead: MODEL.interaction.bodyFromHead,
    eyeClamp: MODEL.interaction.eyeClamp,
    patClamp: MODEL.interaction.patClamp,
    dragThresholdPixels: MODEL.interaction.dragThresholdPixels,
    cooldownSeconds: MODEL.interaction.cooldownSeconds,
    dialogueGraceSeconds: MODEL.interaction.dialogueGraceSeconds,
  },
  dialogues: DIALOGUES.map((dialogue) => ({
    index: dialogue.index,
    motionAnimation: dialogue.motionAnimation,
    attachmentAnimation: dialogue.attachmentAnimation,
    durationSeconds: dialogue.duration,
    lines: dialogue.lines,
  })),
  audio: {
    bgm: BGM,
    voicePath,
    voiceLocales: VOICE_LOCALES,
    subtitleLocales: SUBTITLE_LOCALES,
  },
});

assertWallpaperDefinition(WALLPAPER_DEFINITION);

export const findDialogueLine = createDialogueLineResolver(
  WALLPAPER_DEFINITION.dialogues,
);
