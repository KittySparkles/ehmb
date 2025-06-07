import type { MasteryType } from "../../types";

type RecommendedBuild = {
  name: string;
  author: string;
  hash: string;
  notes?: string;
};

const BOW: RecommendedBuild[] = [];

const DOUBLE_BLADE: RecommendedBuild[] = [];

const DUAL_PISTOL: RecommendedBuild[] = [];

const MAGIC_STAFF: RecommendedBuild[] = [];

const RIFLE: RecommendedBuild[] = [];

const SCYTHE: RecommendedBuild[] = [];

const SHIELD: RecommendedBuild[] = [];

const STONE_ORB: RecommendedBuild[] = [];

const TWO_HANDED: RecommendedBuild[] = [];

export const RECOMMENDED_BUILDS: Record<MasteryType, RecommendedBuild[]> = {
  bo: BOW,
  db: DOUBLE_BLADE,
  dp: DUAL_PISTOL,
  ms: MAGIC_STAFF,
  ri: RIFLE,
  sc: SCYTHE,
  sh: SHIELD,
  so: STONE_ORB,
  th: TWO_HANDED,
};
